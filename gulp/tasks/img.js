export const img = () => {
  return (
    app.gulp
      .src(app.path.src.img)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "IMAES",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // .pipe(app.plugins.newer(app.path.build.img))
      .pipe(app.gulp.dest(app.path.build.img))
      .pipe(app.plugins.browsersync.stream())
  );
};
