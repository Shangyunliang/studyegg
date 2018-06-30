import React, {
  Component
} from 'react';
import Login from '../login/login'

export default class Header extends Component {

  constructor(){
    super()
    this.state = {
      cur: false,
    }
  }

  headTrackClick = () => {
    this.setState({
      cur: !this.state.cur
    })
  }

  render() {
    const { cur } = this.state
    return <div className="movie-header">
      <div id="topbar" pn="M16_HeadNav" className="fixed">
        <div className="headbar" id="headbar">
          <h1 pan="M16_HeadNav_MiddleNav"><a title="Mtime时光网" href="http://www.mtime.com">Mtime时光网</a></h1>
          <dl className="headbarnav">
            <dd className=""><a href="http://www.mtime.com/"  pan="M16_HeadNav_LeftNav_Index">首页<i></i></a></dd>
            <dd className="cur"><a href="http://theater.mtime.com/"  pan="M16_HeadNav_LeftNav_Theater">购票<i></i></a></dd>
            <dd className=""><a href="http://mall.mtime.com/"  pan="M16_HeadNav_LeftNav_Mall">正版商城<i></i></a></dd>
            <dd className=""><a href="http://news.mtime.com/"  pan="M16_HeadNav_LeftNav_News">新闻<i></i></a></dd>
            <dd className=""><a href="http://live.mtime.com/"  pan="M16_HeadNav_LeftNav_Live">直播<i></i><em>NEW</em></a></dd>
            <dd className=""><a href="http://movie.mtime.com/" pan="M16_HeadNav_LeftNav_Recent">发现<i></i></a></dd>
            <dd className=""><a href="http://www.mtime.com/community/" pan="M16_HeadNav_LeftNav_Community">社区<i></i></a></dd>
            <dd className=""><a href="http://vip.mtime.com/" pan="M17_HeadNav_LeftNav_Vip">会员<i></i></a></dd>
          </dl>
          <div className="headtool" id="loginbox"><i className="line"></i>
            <div className="headunlogin">
              <a href="javascript:void(0);" onClick={this.headTrackClick} pan="M16_HeadNav_User_SignIn" className={cur ? 'cur' : ''}>登录<i></i></a>
              <em></em>
              <a href="javascript:void(0);" onclick="headTrackClick('M16_HeadNav_User_Reg')" pan="M16_HeadNav_User_Reg">注册</a>
            </div>
            {
              cur ? <Login /> : null
            }
          </div>
        </div>
    </div>
    </div>
  }
}
