const { Controller } = require('egg')
class UserController extends Controller {
  async findone() {
    const { ctx, app } = this;
    const person = await app.mysql.query(`select * from userinfo`);
    ctx.body = person
  }
  async login() {
    const { ctx, app } = this;
    const person = await app.mysql.query(`select * from userinfo`);
    const token = app.jwt.sign({ username: person.username, userid: person.id }, app.config.jwt.secret);
    ctx.cookies.set('token', token)
    ctx.response.redirect('/ssr/')
  }
  async needlogin() {
    const { ctx, app } = this
    ctx.response.redirect('/ssr/register')
  }
  async success() {
    const { ctx } = this
    this.ctx.body = this.ctx.state.user
  }
};
module.exports = UserController;
