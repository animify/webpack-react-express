const gulp = require('gulp');
const watch = require('gulp-watch');
const stylus = require('gulp-stylus');
const jetpack = require('fs-jetpack');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');
const env = require('gulp-env');

const nib = require('nib');
const jeet = require('jeet');
const rupture = require('rupture');

const libs = jetpack.cwd('./libs/');
const dist = jetpack.cwd('./dist/');

const stylusDir = libs.cwd('stylesheets/styl');
const cssDir = libs.cwd('public/css');

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(stylusDir.path('**/*.styl'), ['stylus']);
})

gulp.task('stylus', () => {
  return gulp.src(stylusDir.path('blossom.styl'))
    .pipe(stylus({
      use: [jeet(), nib(), rupture()]
    }))
   .pipe(gulp.dest(cssDir.path()))
   .pipe(livereload())
})

gulp.task('serve', () => {
  const envs = env.set({
    NODE_ENV: 'development'
  });

  nodemon({script: 'app.js'});
})

gulp.task('default', ['stylus', 'serve', 'watch']);
