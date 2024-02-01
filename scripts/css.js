const gulp = require("gulp");
const cssmin = require("gulp-cssmin");
const autoPrefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const { resolve } = require("path");

const buildSass = () =>
  gulp
    .src(resolve(__dirname, "../packages/theme-chalk/**/*.scss")) // 1.找到内容
    .pipe(sass()) // 2.转换scss
    .pipe(autoPrefixer()) // 3.自动添加前缀
    .pipe(cssmin()) // 4.压缩
    .pipe(gulp.dest(resolve(__dirname, "../dist/theme-chalk"))); // 5.放到指定目录

exports.default = buildSass;
