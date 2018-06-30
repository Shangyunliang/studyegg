
module.exports = app => {
  app.redirect('/', '/ssr', 302);
  app.get('/ssr(/.+)?', app.controller.spa.ssr);
  app.get('/findone', app.controller.spa.findone);
  app.get("/index", app.jwt, app.controller.spa.index);
  app.get("/login", app.controller.spa.login);
  app.get("/success", app.jwt, app.controller.spa.success);
};
