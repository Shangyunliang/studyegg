import React, {
  Component
} from 'react';

function comingCard(i){
  return (
    <dd key={i}>
      <ul>
          <li><i className="dot">&nbsp;</i></li>
          <li className="day"><strong>6月15日</strong>即将上映</li>
          <li className="i_wantmovie">
              <a href="http://movie.mtime.com/250595/" target="_blank" title="泄密者/The Leaker(2018)" className="img __r_c_" pan="M14_TheaterIndex_Upcoming_Cover"><img src="http://img5.mtime.cn/mt/2018/06/12/144615.15753425_100X150X4.jpg" width="100" height="150" alt="泄密者/The Leaker(2018)" /></a>
              <div className="__r_c_" pan="M14_TheaterIndex_Upcoming_Title">
                  <h3><a href="http://movie.mtime.com/250595/" target="_blank">泄密者</a></h3>
                  <p><span mid="250595" method="want" genre="1"> 287人想看 - </span><a href="http://movie.mtime.com/movie/search/section/?type=Crime" target="_blank">犯罪</a> / <a href="http://movie.mtime.com/movie/search/section/?type=Action" target="_blank">动作</a></p>
                  <p className="i_wbr"><b>导演：</b><a href="http://people.mtime.com/892937/" target="_blank">邱礼涛</a> </p>
              </div>
              <p><a href="http://movie.mtime.com/250595/trailer/70883.html" className="__r_c_" pan="M14_TheaterIndex_Upcoming_TrailerButton" target="_blank">预告片<i className="icon_ivideo"></i></a></p>
              <p className="ticket __r_c_" pan="M14_TheaterIndex_Upcoming_TicketButton" mid="250595" method="presell"><a href="http://theater.mtime.com/China_Beijing/movie/250595/20180614/" target="_blank">超前预售</a></p>
          </li>
      </ul>
    </dd>
  )
}

export default class UpComing extends Component {
  state = {
    left: 0
  }

  width = 311
  i = 10

  handleUpcomingPre = () => {
    const { left } = this.state
    if(left + (this.width * 2) < 0) {
      this.setState({
        left: this.state.left + (this.width * 2)
      })
    }else {
      this.setState({
        left: 0
      })
    }
  }

  handleUpcomingNext = () => {
    const { left } = this.state
    // console.log(left, left + (this.width * 4), this.width * this.i, Math.abs(left + (this.width * 4)) < this.width * this.i);
    if((Math.abs(left) + (this.width * 4)) < this.width * this.i) {
      this.setState({
        left: this.state.left - (this.width * 2)
      })
    }else {
      this.setState({
        left: this.width * (this.i - 3) * -1
      })
    }
  }

  render() {
    const sum_width = this.width * this.i

    let card = []

    for(let sum = 0; sum < this.i; sum ++) {
      card.push(comingCard(sum))
    }

    return  <div id="upcomingRegion" className="i_swwantlist" mids="258305,250595,229811,255763,234987,256141,256252,254772,225759,236846,219707,257863,257774,257819,237536,258154,244257,225726,257668,223686,242396,251270,254184,258140,258150,258153,197885,255800,237446,240989,235395,258236,242167,256244,230022,257740,232558,229366,223748,250925,256241,251851,249775,253781,257780,232758,253688,218440,257861,225827,241018,229275,219640,257529,247506,142177,255265,255302,257792,257716,242270,257733,255797">
        <a onClick={this.handleUpcomingPre} id="upcomingPre" title="last" className="lastcol"></a>
        <a onClick={this.handleUpcomingNext} id="upcomingNext" title="next" className="nextcol"></a>
        <span className="shadow"></span>
        <div className="i_swwantlister">
            <dl id="upcomingSlide" className="clearfix transition6" style={{width: `${sum_width}px`, left: `${this.state.left}px`}}>
            {card}
            </dl>
        </div>
      </div>
    }
}

// style="width: 19693px; left: 0px;"
