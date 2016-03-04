var gulp = require('gulp');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var autoprefixer = require('gulp-autoprefixer');
var yargs = require("yargs");
var del = require("del");
var runSequence = require("run-sequence");
var baseCdnUrl = '//cdn.edgedesign.cz/cookielista/';

gulp.task('sass:build', function(){
  return gulp.src('./styles/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
    }))
    .pipe(gulp.dest('./build'));
});


gulp.task('minify', function () {
  return gulp.src('./cookieconsent.js')
    .pipe( gulpif( yargs.argv.tag !== undefined, replace(/(var THEME_BUCKET_PATH(?: )*=(?: )*')(.*)(';)/, '$1' + baseCdnUrl + yargs.argv.tag+'/$3')) )
    .pipe(uglify())
    .pipe(rename('cookieconsent.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy:images', function() {
  return gulp.src('./images/*')
    .pipe(gulp.dest('./build'));
});

gulp.task('cleanup:begin', function() {
  return del([
    "./build"
  ]);
});

gulp.task('build', function(callback){
  runSequence(
    'cleanup:begin',
    'minify',
    'sass:build',
    'copy:images',
    callback
  );
});
