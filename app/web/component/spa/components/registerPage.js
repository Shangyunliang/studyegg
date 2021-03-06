import React, {
  Component
} from 'react';
import {Helmet} from "react-helmet";

export default class RegisterPage extends Component {

  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return <div className="regin_out">
      <Helmet>
        <link rel="stylesheet" href="/public/css/register.css"></link>
      </Helmet>
      <div className="regin_line"></div>
      <div className="regin_inner fix">
        <div className="regin_left">
          <h5>新会员注册</h5>
          <dl>
            <dd>
              <div className="reg_txt ">
                <input type="text" id="reg_mobile" placeholder="常用手机号"></input>
                <p className="reg_errtxt" id="reg_mobile_msg"></p>
              </div>
            </dd>
            <dd>
              <div className="reg_txt ">
                <input type="password" id="reg_password" maxlength="20" placeholder="密码 (6-20位字母与数字、符号组合)"></input>
                <p className="reg_errtxt" id="reg_password_msg">密码强度太低，请使用6-20位字母与数字、符号的组合</p>
                <div id="levelDiv" className="password_box">
                  <p id="levelTip">密码强度</p>
                  <p><i className="ps1">&nbsp;</i><i className="ps2">&nbsp;</i><i className="ps3">&nbsp;</i></p>
                </div>
                <div className="password_tog " id="showPwdBtn"></div>
              </div>
            </dd>
            <dd>
              <div className="reg_txt reg_vcode">
                <input type="text" id="reg_vcode" placeholder="图片验证码"></input>
                <p className="reg_errtxt" id="reg_vcode_msg"></p>
              </div><span id="vcodeRegion" className="reg_vcodeimg"><span id="img_vcode"><img width="120" height="60" alt="点击更新新图" src="//service.mtime.com/ValidateCode.ashx?token=201806301211275073&amp;code=180630121127348869&amp;width=120&amp;height=60" style={{cursor: 'pointer'}} className="v_m mr6"></img></span>
              <a
                id="btn_changevcode" className="px12 normal">刷新</a>
                </span>
            </dd>
            <dd>
              <div className="reg_txt">
                <input type="text" id="reg_smscode" placeholder="短信验证码"></input>
                <p className="reg_errtxt" id="reg_smscode_msg"></p><a id="reg_smscodeBtn" href="#" className="get_telcode">获取验证码</a></div>
            </dd>
            <dd>
              <div className="reg_selsex" id="sexRegion">性别：<span className="checkend"><i data-sex="1" data-selector="sex" className="reg_checkbox"></i>男<em className="ico_female"></em></span><span><i data-sex="2" data-selector="sex" className="reg_checkbox"></i>女<em className="ico_male"></em></span>
                <p id="sexErrorMsg" style={{display:'none'}}>请选择性别!</p>
                <input type="hidden" id="hidSexValue"></input>
              </div>
            </dd>
            <dd>
              <div className="bind_pro"><span id="reg_policy" className="on"></span><a href="http://feature.mtime.com/help/policy.htm" target="_blank">已同意《Mtime时光网服务条款》</a></div>
            </dd><dt className="reg_btn"><a id="mobileRegisterBtn" className="btn_blue">注 册</a></dt></dl>
        </div>
        <div className="regin_right">
          <h5>会员登录</h5>
          <form id="loginForm" method="post">
            <dl>
              <dd>
                <div className="reg_txt "><input type="text" id="loginEmailText" name="email" placeholder="输入邮箱 / 手机号码"></input>
                  <p className="reg_errtxt" id="loginEmailText_msg">请使用邮箱 / 手机号或 万达电影 账号登录 </p>
                </div>
              </dd>
              <dd>
                <div className="reg_txt">
                  <input type="password" id="hidepassword" className="c_a5" style={{display:' none'}}></input>
                  <input type="password" id="loginPasswordText" placeholder="请输入密码" autocomplete="off"></input>
                  <p className="reg_errtxt" id="hidepassword_msg">密码错误</p>
                </div>
              </dd>
              <dd>
                <div className="bind_pro"><a id="forget_password" href="#" className="fr">忘记密码</a><a href="javascript:;" data-login="loginWayChange" className="fl">短信验证码登录</a></div>
              </dd>
              <dd>
                <p className="err_txt" id="login_errtxt"></p>
              </dd><dt className="reg_btn"><a id="loginButton" className="btn_blue">登 录</a></dt></dl>
          </form>
          <dl className="regin_log3 fix">
            <dd><a href="/unitelogin/dispatch/weixin/web/" className="weixin"></a><a href="/unitelogin/dispatch/qq/web/?r=http%3A%2F%2Ftheater.mtime.com%2FChina_Beijing%2F" className="qq"></a><a href="/unitelogin/dispatch/weibo/web/?r=http%3A%2F%2Ftheater.mtime.com%2FChina_Beijing%2F"
                className="sina"></a></dd>
          </dl>
        </div>
      </div>
    </div>
  }
}
