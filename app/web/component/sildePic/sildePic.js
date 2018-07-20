import React, {
  Component
} from 'react';

export default class SilePic extends Component {

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
      },{
        key: 2,
        name: '《动物世界》',
        backgroundurl: require('../../asset/images/dongwushijieback.jpg'),
        fonturl: require('../../asset/images/dongwushijiefont.jpg'),
      },{
        key: 3,
        name: '《邪不压正》',
        backgroundurl: require('../../asset/images/xiebuyazhengback.jpg'),
        fonturl: require('../../asset/images/xiebuyazhengfont.jpg'),
      },{
        key: 4,
        name: '《我不是药神》',
        backgroundurl: require('../../asset/images/wobushiyaoshenback.jpg'),
        fonturl: require('../../asset/images/wobushiyaoshenfont.jpg'),
      },{
        key: 5,
        name: '《摩天营救》',
        backgroundurl: require('../../asset/images/motianjiuyuanback.jpg'),
        fonturl: require('../../asset/images/motianjiuyuanfont.jpg'),
      }],
      current: 0,
      interval: 0,
    }
  }

  handleLeft = () => {
    clearTimeout(this.state.interval)
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
    clearTimeout(this.state.interval)
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
    const { interval } = this.state
    if(interval) {
      clearTimeout(interval)
    }
    const id = setTimeout(this.handleLeft, 7000)
    this.setState({interval: id})
  }



  componentDidMount() {
    const { interval } = this.state
    if(interval) {
      clearTimeout(interval)
    }
    this.handleLeft()
    // this.setState({interval: id})
  }

  render() {
    console.log(this.state.interval);
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

    return <div id="headImgDiv" className="i_newshead">

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
          return <a key={f.key} href="#" onClick={()=>{}} className={f.on ? 'on' : null}>{f.key + 1}</a>
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

                      <p className="textinfo">
                        <span mid="225759" method="want"> 8650人想看</span> - <a href="http://movie.mtime.com/movie/search/section/?type=Action" target="_blank" style={{}}>动作</a>/<a href="http://movie.mtime.com/movie/search/section/?type=Adventure" target="_blank" style={{}}>冒险</a>
                        <span mid="225759" method="upcoming"> - 北京446家影院超前预售</span>
                      </p>
                      <p className="textinfo">
                        <i className="ico_ydot"></i>
                        <a href="http://movie.mtime.com/240989/" target="_blank">生死游戏中直面人性的自私与残酷</a>
                      </p>
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
  }
}

// <h3>6月15日 - 全国上映</h3>
