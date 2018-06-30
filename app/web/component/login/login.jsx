import React, {
  Component
} from 'react';

export default class Login extends Component {

  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return <div className="headtip login-tip" style={{display: 'block'}}>
      <dl className="logintool"><dt><strong>为爱电影的人</strong> For people who love movies</dt>
        <dd className="userlogin"><ul>
          <li className=""><input type="text" placeholder="输入邮箱 / 手机号码" className="tip"></input></li>
          <li className=""><input type="password" placeholder="输入密码" className="tip"></input></li>
          <li className="" style={{display: 'none'}}><input type="text" value="图片验证码" className="tip"></input><span className="vcodeimageout"></span></li>
        </ul>
        <p className="usertip">
          <span className="smstips"></span>
          <a href="javascript:void(0);" className="fr">忘记密码?</a>
        </p>
        <div className="loginbtn">
          <a href="javascript:void(0);" className="btnblue __r_c_" pan="M16_HeadNav_User_SignInBtn">登录</a></div>
          <p className="loginwaychange"><a href="javascript:void(0);" className="fl">短信验证码登录</a><a href="javascript:void(0);" className="fr __r_c_" pan="M16_HeadNav_User_RegBtn">立即注册</a></p>
        </dd>
      </dl>
      <dl className="otherlogin">
        <dd>
          <a href="https://passport.mtime.com/unitelogin/dispatch/weixin/web/" title="微信" className="ico-weixin __r_c_" pan="M16_HeadNav_User_SignInWeixin"></a>
          <a href="https://passport.mtime.com/unitelogin/dispatch/qq/web/" title="QQ" className="ico-qq __r_c_" pan="M16_HeadNav_User_SignInQq"></a>
          <a href="https://passport.mtime.com/unitelogin/dispatch/weibo/web/" title="新浪" className="ico-sina __r_c_" pan="M16_HeadNav_User_SignInSina"></a>
        </dd>
      </dl>
    </div>
  }
}
