import React, {
  Component
} from 'react';
import './header.css';
export default class Header extends Component {

  constructor(){
    super()
    this.state = {
      block: [{opacity: 1}, {opacity: 1, zIndex: 3}],
      none: [{opacity: 0}, {opacity: 0, zIndex: 1}],
    }
  }

  componentDidMount() {
    let i = 0
    setInterval(() => {
      if(i % 2 == 0) {
        this.setState({
          block: [{opacity: 0}, {opacity: 0, zIndex: 1}],
          none: [{opacity: 0}, {opacity: 1, zIndex: 3}],
        })
        setTimeout(()=> {
          this.setState({
            block: [{opacity: 0}, {opacity: 0, zIndex: 1}],
            none: [{opacity: 1}, {opacity: 1, zIndex: 3}]
          })
        }, 600)
      }else {
        this.setState({
          block: [{opacity: 0}, {opacity: 1, zIndex: 3}],
          none: [{opacity: 0}, {opacity: 0, zIndex: 1}],
        })
        setTimeout(()=> {
          this.setState({
            block: [{opacity: 1}, {opacity: 1, zIndex: 3}],
            none: [{opacity: 0}, {opacity: 0, zIndex: 1}]
          })
        }, 600)
      }
      i = i + 1
    }, 5000)
  }

  render() {
    return <div className="movie-header"><div id="topbar" pn="M16_HeadNav" className="fixed">
      <div className="headbar" id="headbar">
        <h1 onclick="headTrackClick('M16_HeadNav_MiddleNav')" pan="M16_HeadNav_MiddleNav"><a title="Mtime时光网" href="http://www.mtime.com">Mtime时光网</a></h1>
        <dl className="headbarnav">
          <dd className=""><a href="http://www.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_Index')" pan="M16_HeadNav_LeftNav_Index">首页<i></i></a></dd>
          <dd className="cur"><a href="http://theater.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_Theater')" pan="M16_HeadNav_LeftNav_Theater">购票<i></i></a></dd>
          <dd className=""><a href="http://mall.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_Mall')" pan="M16_HeadNav_LeftNav_Mall">正版商城<i></i></a></dd>
          <dd className=""><a href="http://news.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_News')" pan="M16_HeadNav_LeftNav_News">新闻<i></i></a></dd>
          <dd className=""><a href="http://live.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_Live')" pan="M16_HeadNav_LeftNav_Live">直播<i></i><em>NEW</em></a></dd>
          <dd className=""><a href="http://movie.mtime.com/" onclick="headTrackClick('M16_HeadNav_LeftNav_Recent')" pan="M16_HeadNav_LeftNav_Recent">发现<i></i></a></dd>
          <dd className=""><a href="http://www.mtime.com/community/" onclick="headTrackClick('M16_HeadNav_LeftNav_Community')" pan="M16_HeadNav_LeftNav_Community">社区<i></i></a></dd>
          <dd className=""><a href="http://vip.mtime.com/" onclick="headTrackClick('M17_HeadNav_LeftNav_Vip')" pan="M17_HeadNav_LeftNav_Vip">会员<i></i></a></dd>
        </dl>
      </div>
    </div>
    <div id="headImgDiv" className="i_newshead">

    <a href="#" id="headImgPre" className="lastnews" title="上一篇"><i></i></a>
    <a href="#" id="headImgNext" className="nextnews" title="下一篇"><i></i></a>

    <ul id="headImgBackSlidesRegion" className="bgimg">
    	<li style={{backgroundImage: "url('http://img5.mtime.cn/mg/2018/06/12/145232.98799165.jpg')", ...this.state.block[1], backgroundRepeat: 'no-repeat'}} className="transition3"></li>
    	<li style={{backgroundImage: "url('http://img5.mtime.cn/mg/2018/05/11/094030.45344019.jpg')", ...this.state.none[1], backgroundRepeat: 'no-repeat'}} className="transition3"></li>
    </ul>

    <div id="headImgDotSlidesRegion" className="i_newsnav">
    	<a href="#" className="on" onclick="return false;">1</a>
        <a href="#" onclick="return false;" className="">2</a>
    </div>
    <div className="i_newsimgs">
        <div className="dl">
            <div id="headImgTxtSlidesRegion" className="i_newstitbox">
                <div className="textbox transition4 transition6 __r_c_" style={this.state.block[0]} pan="M14_TheaterIndex_HeadImg1">
                    <span className="hotfilm beginhot">即将上映</span>
                    <h2><a href="http://movie.mtime.com/225759/" target="_blank" style={{}}>《侏罗纪世界2》</a></h2>
                    <h3>6月15日 - 全国上映</h3>
                    <p className="textinfo"><span mid="225759" method="want"> 8650人想看</span> - <a href="http://movie.mtime.com/movie/search/section/?type=Action" target="_blank" style={{}}>动作</a>/<a href="http://movie.mtime.com/movie/search/section/?type=Adventure" target="_blank" style={{}}>冒险</a><span mid="225759" method="upcoming"> - 北京446家影院超前预售</span></p>
                    <p className="morelink"><a href="http://movie.mtime.com/225759/" target="_blank" style={{}}><span className="icon-add"><em>+</em></span>查看详情</a></p>
                </div>
                <div className="textbox transition4 transition6 __r_c_" style={this.state.none[0]} pan="M14_TheaterIndex_HeadImg2">
                    <span className="hotfilm">正在热映</span>
                    <h2><a href="http://movie.mtime.com/217497/" target="_blank" style={{}}>《复仇者联盟3》</a></h2>
                    <p className="textinfo">150分钟 - <a href="http://movie.mtime.com/movie/search/section/?type=Action" target="_blank" style={{}}>动作</a>/<a href="http://movie.mtime.com/movie/search/section/?type=Adventure" target="_blank" style={{}}>冒险</a><span mid="217497" method="hotplay"> - 北京106家影院上映439场</span></p>
                    <p className="textinfo"><i className="ico_ydot"></i><a href="http://movie.mtime.com/217497/" target="_blank" style={{}}>复联全员与灭霸巅峰一役引人注目</a></p>
                    <p className="morelink"><a href="http://movie.mtime.com/217497/" target="_blank" style={{}}><span className="icon-add"><em>+</em></span>查看详情</a></p>
                </div>
            </div>

            <dl id="headImgSlidesRegion" className="clearfix">
                <dd style={this.state.block[1]} className="transition8 __r_c_" pan="M14_TheaterIndex_HeadImg1">
                    <h2>《侏罗纪世界2》</h2>
                    <a href="http://movie.mtime.com/225759/" title="《侏罗纪世界2》" target="_blank"><img src="http://img5.mtime.cn/mg/2018/06/12/145226.42060796.jpg" width="1000" height="390" alt="《侏罗纪世界2》"></img></a>
                </dd>
                <dd style={this.state.none[1]} className="transition8 __r_c_" pan="M14_TheaterIndex_HeadImg2">
                    <h2>《复仇者联盟3》</h2>
                    <a href="http://movie.mtime.com/217497/" title="《复仇者联盟3》" target="_blank"><img src="http://img5.mtime.cn/mg/2018/05/11/094023.33962241.jpg" width="1000" height="390" alt="《复仇者联盟3》"></img></a>
                </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  }
}
