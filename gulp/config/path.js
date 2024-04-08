// Получаем имя папки проекта
import * as nodePath from "path";
const rooFolder = nodePath.basename(nodePath.resolve());

const buildFolder = ".dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/assets/files/`,
    img: `${buildFolder}/assets/img/`,
    css: `${buildFolder}/assets/css/`,
    js: `${buildFolder}/assets/js/`,
    img: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    js: `${srcFolder}/assets/js/app.js`,
    scss: `${srcFolder}/assets/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/assets/files/**/*.*`,
    fonts: `${srcFolder}/assets/fonts/*.ttf`,
    img: `${srcFolder}/assets/img/**/*.*`,
    svg: `${srcFolder}/assets/img/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/assets/js/**/*.js`,
    scss: `${srcFolder}/assets/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/assets/files/**/*.*`,
    img: `${srcFolder}/assets/img/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rooFolder,
  ftp: "",
};
