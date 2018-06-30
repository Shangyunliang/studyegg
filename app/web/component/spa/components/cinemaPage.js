import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import FilmInfoCard from 'component/filmInfoCard/filmInfoCard'

const FilmName = () => {
  return (
    <div className="videoname">
      <h2 title="侏罗纪世界2">侏罗纪世界2 </h2>
      <h3 title="Jurassic World: Fallen Kingdom">Jurassic World: Fallen Kingdom </h3>
      <ul className="cinema_info_place">
        <li className="cinema_info_city" id="userCityRegion"> <em></em><label>北京</label><span>[切换]</span></li>
        <li className="cinema_info_cinema" id="showTimeCountRegion">今日<span>148</span>家影院，上映<span>6405</span>场</li>
      </ul>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="ci_menu">
      <a id="msDatePrev" href="#" className="cimenu_prev" onclick="return false;">&nbsp;</a>
      <a id="msDateNext" href="#" className="cimenu_next" onclick="return false;">&nbsp;</a>
      <div className="menuscroll">
        <ul id="valueDateRegion" className="clearfix transition6" style={{left: 0, width: '1380px'}}>
          <li className="curr"><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180618/" target="_self">今天 &nbsp; 6月18日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180619/" target="_self">明天 &nbsp; 6月19日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180620/" target="_self">后天 &nbsp; 6月20日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180621/" target="_self">周四 &nbsp; 6月21日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180622/" target="_self">周五 &nbsp; 6月22日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180623/" target="_self">周六 &nbsp; 6月23日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180624/" target="_self">周日 &nbsp; 6月24日<i className="ico_c_jiao00">&nbsp;</i></a></li>
          <li className=""><a href="http://theater.mtime.com/China_Beijing/movie/225759/20180629/" target="_self">周五 &nbsp; 6月29日<i className="ico_c_jiao00">&nbsp;</i></a></li>
        </ul>
      </div>
    </div>
  )
}


const CinmaCard = () => {
  return (
    <dl className="movieinfobox" cid="11835">
      <dt data-selector="favregion">
        <a href="http://theater.mtime.com/China_Beijing_Fengtai/11835/" target="_blank">星空影城（六里桥店）</a>
        <a method="addfavorite" cid="11835" href="#" className="ico_stat " onclick="return false;">我常去</a>
        <a method="delfavorite" cid="11835" href="#" className="ico_stat ico_end" onclick="return false;" style={{display:'none'}}>取消</a>
      </dt>
      <dd
        className="infotxt filmicon">
        <p>北京市丰台区西三环南路10号月恒正大新生活广场三层</p>
        <div className="moretool"><i className="ico_c_f02" title="1-11号厅">&nbsp;</i><i className="ico_c_f03" title="8号厅，37座">&nbsp;</i><i className="ico_c_f07" title="5号厅，72座">&nbsp;</i><i className="ico_c_f15" title="7号厅，86座">&nbsp;</i><i className="ico_c_f09" title="">&nbsp;</i>免押金<i className="ico_c_f14"
            title="">&nbsp;</i>可停车<i className="ico_c_f25" title="">&nbsp;</i>取票机</div>
        <div className="ticketselect">
          <p><span>¥</span>48<span>元起</span></p><a method="openshowtime" cid="11835" href="#" className="ico_c_ticket" onclick="return false;">选座购票<span>∨</span></a></div>
        </dd>
        <dd className="tickettime" style={{display:'none'}}>
          <ul className="clearfix"></ul>
          <p className="morelink"><a method="hideshowtime" cid="{0}" href="#" onclick="return false;"><b className="v_m">收起</b><span> ∧</span></a></p>
        </dd>
        <dd className="tickettime">
          <ul className="clearfix">
            <li className="curr">
              <a data-selector="buy" href="http://piao.mtime.com/onlineticket/showtime/1823177933/">
                <div className="timebox fl">
                  <p className="only">21:25<span className="nextday"></span></p>
                  <p><span>3D</span><span></span></p>
                </div>
                <div id="price_1823177933" className="pricebox fl" newprice="73" oldprice="150">
                  <p className="only">¥73</p>
                  <p className="del">¥150</p>
                </div>&nbsp;<b className="trueticket">购票</b></a>
            </li>
          </ul>
          <p className="morelink"><a method="hideshowtime" cid="{0}" href="#" onclick="return false;"><b className="v_m">收起</b><span> ∧</span></a></p>
        </dd>
    </dl>
  )
}

export default class CinemaPage extends Component {
  render() {
    return (
      <div className="newshowtime">
        <Helmet>
          <link rel="stylesheet" href="/public/css/cinema.css"></link>
        </Helmet>
        <div className="nstimebg">&nbsp;</div>
        <div className="nstimemid">
          <div id="M14_A_MovieShowtimePage_TopBannerTG">
            <div className="tc" style={{height:'45px', width:'1000px', margin:'0 auto', position:'relative'}}>
              <div style={{position:'absolute', left:0, top:'-60px'}}><iframe src="http://static1.mtime.cn/tg/2011/2014_yingpianyingxunun_top_banner_1000x90.html" width="1000" height="90" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="true"></iframe></div>
            </div>
          </div>
          <div className="nbg_cinema">
            <div className="nstimecon clearfix">
              <div className="aside">
                <div id="movieInfoRegion" className="filbg" >
                  <FilmInfoCard />
                </div>
              </div>
              <div className="main">
                <FilmName />
                <Menu />
                <div className="conmid">
                  <div className="othermenu"></div>
                  <div class="movieline">&nbsp;</div>
                  <div id="cinemaListRegion" class="movietxt">
                    <CinmaCard />
                    <CinmaCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// <i classNameName="seat_lover v_m mr3"></i>情侣座位
