import React, {
  Component
} from 'react';

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
        </div>
    </div>
    </div>
  }
}
