// Основной модуль
import gulp from "gulp";
import ghPages from "gulp-gh-pages";
// Импотр путей
import { path } from "./gulp/config/path.js";

// Импорт планинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.js, img);
};

const fonts = gulp.series(otfToTtf, ttfToWoff);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, img));

// Построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

// Выполнение сценария по умолчанию
gulp.task("default", dev);

gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(ghPages());
});
