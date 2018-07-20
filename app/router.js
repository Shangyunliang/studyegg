
module.exports = app => {
  app.redirect('/', '/ssr', 302);
  app.get('/ssr(/.+)?', app.controller.movieSpa.ssr);
  // app.get("/index", app.jwt, app.controller.MovieSpaController.index);
  app.get("/login", app.controller.user.login);
  app.get("/needlogin", app.jwt, app.controller.user.needlogin);
};
