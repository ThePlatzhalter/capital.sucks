let express        = require('express')
let app            = express()
let bodyParser     = require('body-parser')
let methodOverride = require('method-override')
let mongoose       = require('mongoose')
let scribe         = require('scribe-js')()
let cookieParser   = require('cookie-parser')
let passport       = require('passport')
let LocalStrategy  = require('passport-local').Strategy
let _              = require('./app/lib/underscore')

let db     = require('./config/db')

let port = process.env.PORT | 5346

app.use(scribe.express.logger())

app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(require('express-session')({
    secret: db.secret,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(methodOverride('X-HTTP-Method'))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))

app.use('/dist/css', express.static(__dirname + '/dist/css'))
app.use('/dist/js', express.static(__dirname + '/dist/js'))
app.use('/dist/img', express.static(__dirname + '/dist/img'))
app.use('/dist/views', express.static(__dirname + '/dist/views'))
app.use('/dist/vendor', express.static(__dirname + '/dist/vendor'))

mongoose.connect(db.url)
let dbcon = mongoose.connection
dbcon.on('error', console.error.bind(console, 'connection error:'))
dbcon.once('open', () => {
    require('./app/routes')(app)
})

app.listen(port)
_.log('Listening on ' + port)

exports = module.exports = app