import React, {
  Component
} from 'react';
import './header.css';

export default class Header extends Component {

  constructor(){
    super()
    this.state = {
      data: [{
        key: 0,
        name: '《侏罗纪世界2》',
        backgroundurl: require('../../asset/images/zhuoluojiback.jpg'),
        fonturl: require('../../asset/images/zhuoluojifont.jpg'),
      },{
        key: 1,
        name: '《复仇者联盟3》',
        backgroundurl: require('../../asset/images/fulianback.jpg'),
        fonturl: require('../../asset/images/fulianfont.jpg'),
      }],
      current: 0,
      interval: 0,
    }
  }

  handleLeft = () => {
    clearInterval(this.state.interval)
    let { data, current } = this.state
    let len = data.length
    if(current - 1 < 0) {
      current = len - 1
    }else {
      current = current - 1
    }
    this.opacityInfo()
    this.setState({current, data})
  }

  handleRight = () => {
    clearInterval(this.state.interval)
    let { data, current } = this.state
    let len = data.length
    if(current + 1 > len - 1) {
      current = 0
    }else {
      current = current + 1
    }
    this.opacityInfo()
    this.setState({current, data})
  }

  opacityInfo = () => {
    setTimeout(() => {
      let { data, current } = this.state
      data = data.map((film, index) => {
        if(current === film.key) {
          film.info = {opacity: 1}
        }else {
          film.info = {opacity: 0}
        }
        return film
      })
      this.setState({data})
    }, 600)
    const id = setInterval(this.handleLeft, 5000)
    this.setState({interval: id})
  }



  componentDidMount() {
    const { interval } = this.state
    if(interval) {
      clearInterval(interval)
    }
    const id = setInterval(this.handleLeft, 5000)
    this.setState({interval: id})
  }

  render() {
    let { data, current } = this.state
    data = data.map((film, index) => {
      if(current === film.key) {
        film.styles = {opacity: 1}
        film.on = true
      }else {
        film.styles = {opacity: 0}
        film.info = {opacity: 0}
        film.on = false
      }
      return film
    })

    return <div className="movie-header"><div id="topbar" pn="M16_HeadNav" className="fixed">
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
      </div>
    </div>
    <div id="headImgDiv" className="i_newshead">

    <a onClick={this.handleLeft} id="headImgPre" className="lastnews" title="上一篇"><i></i></a>
    <a onClick={this.handleRight} id="headImgNext" className="nextnews" title="下一篇"><i></i></a>

    <ul id="headImgBackSlidesRegion" className="bgimg">
      {
        data.map(f => {
          return <li key={f.key} style={{backgroundImage: `url(${f.backgroundurl})`, backgroundRepeat: 'no-repeat', ...f.styles}} className="transition3"></li>
        })
      }
    </ul>

    <div id="headImgDotSlidesRegion" className="i_newsnav">
      {
        data.map(f => {
          return <a key={f.key} href="#" onClick="" className={f.on ? 'on' : null}>{f.key + 1}</a>
        })
      }
    </div>
    <div className="i_newsimgs">
        <div className="dl">
          <div id="headImgTxtSlidesRegion" className="i_newstitbox">
          {
            data.map(f => {
              return <div key={f.key} className="textbox transition4 transition6 __r_c_" style={f.info} pan="M14_TheaterIndex_HeadImg1">
                      <span className="hotfilm beginhot">即将上映</span>
                      <h2><a href="http://movie.mtime.com/225759/" target="_blank" style={{}}>{f.name}</a></h2>
                      <h3>6月15日 - 全国上映</h3>
                      <p className="textinfo"><span mid="225759" method="want"> 8650人想看</span> - <a href="http://movie.mtime.com/movie/search/section/?type=Action" target="_blank" style={{}}>动作</a>/<a href="http://movie.mtime.com/movie/search/section/?type=Adventure" target="_blank" style={{}}>冒险</a><span mid="225759" method="upcoming"> - 北京446家影院超前预售</span></p>
                      <p className="morelink"><a href="http://movie.mtime.com/225759/" target="_blank" style={{}}><span className="icon-add"><em>+</em></span>查看详情</a></p>
                  </div>
            })
          }
          </div>
          <dl id="headImgSlidesRegion" className="clearfix">
            {
              data.map(f => {
                return <dd key={f.key} style={f.styles} className="transition8 __r_c_" pan="M14_TheaterIndex_HeadImg1">
                        <h2>{f.name}</h2>
                        <a href="http://movie.mtime.com/225759/" title="《侏罗纪世界2》" target="_blank"><img src={f.fonturl} width="1000" height="390" alt={f.name}></img></a>
                    </dd>
              })
            }
          </dl>
        </div>
        </div>
      </div>
    </div>
  }
}
