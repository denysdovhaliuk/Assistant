'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf'),
  concat = require('gulp-concat'),
  uglifyes = require('gulp-uglifyes'),
  terser = require('gulp-terser'),
  browserSync = require("browser-sync"),
  reload = browserSync.reload;

var path = {
  build: {
    css: 'dist/css',
    img: 'dist/images',
    js: 'dist/js'
  },
  src: {
    style: [
      'src/sass/main.sass',
      'src/sass/homepage.sass'
    ],
    img: 'src/images/**/*.*',
    js: 'src/images/**/*.*'
  },
  watch: {
    style: 'src/sass/**/*.*',
    img: 'src/images/**/*.*',
    js: 'src/js/**/*.*'
  },
  clean: 'dist'
};

gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
  // .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
  return gulp.src(path.src.js)
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(uglifyes())
    .pipe(gulp.dest(path.build.js));
});

gulp.task('build', [
  // 'clean',
  'style:build',
  'image:build',
  'js:build'
]);

gulp.task('watch', function () {
  watch([path.watch.style], function (event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start('js:build');
  });
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});
