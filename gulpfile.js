let path          = require('path')
let gulp          = require('gulp')
let pump          = require('pump')
let less          = require('gulp-less')
let concat        = require('gulp-concat')
let eslint        = require('gulp-eslint')
let uglify        = require('gulp-uglify')
let rename        = require('gulp-rename')
let htmlmin       = require('gulp-htmlmin')
let nodemon       = require('gulp-nodemon')
let cleanCss      = require('gulp-clean-css')
let ngAnnotate    = require('gulp-ng-annotate')
let sourcemaps    = require('gulp-sourcemaps')
let es6Transpiler = require('gulp-es6-transpiler')

gulp.task('build-js', (cb) => {
    pump([
        gulp.src([
            'public/js/app.js',
            'public/js/appRoutes.js',
            'public/js/components/**/*.js',
            'public/js/services/**/*.js'
        ]),
        es6Transpiler({
            globals: { 'angular': true }
        }),
        sourcemaps.init(),
        ngAnnotate({ single_quotes: true }),
        concat('script.min.js'),
        uglify(),
        sourcemaps.write('.'),
        gulp.dest('dist/js'),
    ], cb)
})

gulp.task('build-css', (cb) => {
    pump([
        gulp.src([ 'public/less/style.less' ]),
        sourcemaps.init(),
        less({ paths: [ 'public/less/includes' ] }),
        cleanCss(),
        sourcemaps.write('.'),
        rename('style.min.css'),
        gulp.dest('dist/css')
    ], cb)
})

gulp.task('build-html-views', (cb) => {
    pump([
        gulp.src([ 'public/views/**/*.html' ]),
        htmlmin({ collapseWhitespace: true }),
        gulp.dest('dist/views')
    ], cb)
})

gulp.task('build-html-index', (cb) => {
    pump([
        gulp.src([ 'public/index.html' ]),
        htmlmin({ collapseWhitespace: true }),
        rename('index.min.html'),
        gulp.dest('dist')
    ], cb)
})

gulp.task('build-html', [ 'build-html-views', 'build-html-index' ])

gulp.task('watch', (cb) => {
    pump([
        nodemon({
            script: './server.js',
            ext: 'js',
            ignore: [ './dist', './public' ]
        }),
        gulp.watch('public/js/**/**/*.js', [ 'build-js' ]),
        gulp.watch('public/less/**/*.less', [ 'build-css' ]),
        gulp.watch([ 'public/views/**/*.html' ], [ 'build-html-views' ]),
        gulp.watch([ 'public/index.html' ], [ 'build-html-index' ])
    ], cb)
})

gulp.task('default', ['build-js', 'build-css', 'build-html'])