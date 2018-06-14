
module.exports = app => {
  app.redirect('/', '/ssr', 302);
  app.get('/ssr(/.+)?', app.controller.spa.ssr);
  app.get('/findone', app.controller.spa.findone);
};
