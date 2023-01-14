process.env.NODE_ENV = 'development';

const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const gzip = require('gulp-gzip');
const del = require("del");
const fileinclude = require('gulp-file-include');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return del("dist");
}

function images() {
  return src("app/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function scripts() {
  let vueScriptPath = "node_modules/vue/dist/vue.global.prod.js";

  if (process.env.NODE_ENV === 'development') {
    vueScriptPath = 'node_modules/vue/dist/vue.global.js'
  }

  return src([
      vueScriptPath,
      // "node_modules/jquery/dist/jquery.js",
      "app/js/modules/**/*",
      "app/js/main.js"
    ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function payScripts() {
  let vueScriptPath = "node_modules/vue/dist/vue.global.prod.js";

  if (process.env.NODE_ENV === 'development') {
    vueScriptPath = 'node_modules/vue/dist/vue.global.js'
  }
  
  return src([ 
    vueScriptPath,
    "app/js/modules/**/*",
    "app/js/pay.js"
  ])
  .pipe(concat("pay.min.js"))
  .pipe(uglify())
  .pipe(dest("app/js"))
  .pipe(browserSync.stream());
}

function shopScripts() {
  let vueScriptPath = "node_modules/vue/dist/vue.global.prod.js";

  if (process.env.NODE_ENV === 'development') {
    vueScriptPath = 'node_modules/vue/dist/vue.global.js'
  }
  
  return src([ 
    vueScriptPath,
    "app/js/modules/**/*",
    "app/js/shop.js"
  ])
  .pipe(concat("shop.min.js"))
  .pipe(uglify())
  .pipe(dest("app/js"))
  .pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function html() {
  return src([
    "app/views/index.html",
    "app/views/pay.html",
    "app/views/shop.html"
  ])
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
  }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(dest("app"));
}

function setProdEnv() {
  process.env.NODE_ENV = 'production';
}

function build() {
  return src(
    [
      "app/css/style.min.css",
      "app/fonts/**/*",
      "app/js/main.min.js",
      "app/index.html",
      "app/video/*"
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

const allScripts = series(scripts, payScripts, shopScripts);

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch([
    "app/js/**/*.js",
    "!app/js/main.min.js",
    "!app/js/pay.min.js",
    "!app/js/shop.min.js"
  ], allScripts);
  watch(["app/views/*.html"]).on("change", series(html, browserSync.reload));
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = allScripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.html = html;

exports.build = series(setProdEnv, cleanDist, images, html, build);
exports.default = parallel(html, styles, allScripts, browsersync, watching);
