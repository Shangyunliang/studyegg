const { Controller } = require('egg')
class SPAController extends Controller {
  async ssr() {
    const { ctx } = this;
    await ctx.render('ssr.js', { url: ctx.url });
  }
  async findone() {
    const { ctx, app } = this;
    console.log(app);
    const person = await app.mysql.query(`select * from userinfo`);
    ctx.body = person
  }
};
module.exports = SPAController;
