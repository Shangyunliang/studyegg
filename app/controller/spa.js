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
  async index() {
    const { ctx } = this
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    // console.log(token);
    this.ctx.body = token
  }
  async login() {
    const { ctx, app } = this
    ctx.response.redirect('/ssr/register')
  }
  async success() {
    const { ctx } = this
    this.ctx.body = this.ctx.state.user
  }
};
module.exports = SPAController;
