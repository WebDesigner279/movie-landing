import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import ts from 'gulp-typescript';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);
const server = browserSync.create();

// Caminhos
const paths = {
  html: 'src/*.html',
  scss: 'src/scss/**/*.scss',
  ts: 'src/ts/**/*.ts',
  images: 'src/images/**/*',
  videos: 'src/videos/**/*',
  dist: 'dist'
};

// Copiar vídeos
export function videos() {
  return gulp.src(paths.videos)
    .pipe(gulp.dest(`${paths.dist}/videos`))
    .pipe(server.stream());
}

// Compilar SCSS
export function scss() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${paths.dist}/css`))
    .pipe(server.stream());
}

// Compilar TypeScript
export function tsCompile() {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(`${paths.dist}/js`))
    .pipe(server.stream());
}

// Otimizar imagens
export function images() {
  return gulp.src(paths.images)
    .pipe(imagemin())
  // importante: usar imagemin.default() com ESModules
    .pipe(gulp.dest(`${paths.dist}/images`))
    .pipe(server.stream());
}

// Copiar HTML
export function html() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.dist))
    .pipe(server.stream());
}

// Iniciar servidor local
export function serve(done) {
  server.init({
    server: {
      baseDir: paths.dist
    },
    port: 3000,
    open: true
  });
  done();
}

// Watch
export function watchFiles() {
  gulp.watch(paths.scss, scss);
  gulp.watch(paths.ts, tsCompile);
  gulp.watch(paths.images, images);
  gulp.watch(paths.videos, videos);
  gulp.watch(paths.html, html);
}

// Build e Dev
export const build = gulp.series(scss, tsCompile, images, videos, html);
export const dev = gulp.series(build, serve, watchFiles);
export default dev;
