import React, { Component } from 'react';
import './filmInfoCard.css'

export default class FilmInfoCard extends Component {
  render() {
    return (
      <div className="filminfo">
        <a href="http://movie.mtime.com/225759/" target="_blank" title="侏罗纪世界2">
                  <img src={require('../../asset/images/zhuoluojiinfo.jpg')} alt="侏罗纪世界2" />
                  <span className="icon_type">
                  <i className="icon_c_3d">&nbsp;</i>
                  <i className="icon_c_imax">&nbsp;</i>
                  </span>
              </a>
        <div className="clearfix">
          <div id="movieRatingRegion" className="filmscore"><b>总评分</b>
            <p>7.3</p>
          </div>
          <ul className="filmtxt">
            <li>上映：2018年6月15日</li>
            <li title="动作 /冒险 /科幻 ">类型：动作 /冒险 /科幻 </li>
            <li>时长：128分钟</li>
          </ul>
        </div>
      </div>
    )
  }
}


// <i classNameNameName="seat_lover v_m mr3"></i>情侣座位
