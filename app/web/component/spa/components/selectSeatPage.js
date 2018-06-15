import React, { Component } from 'react';
import SelectSeat from 'component/selectSeat/selectSeat';

export default class SelectSeatPage extends Component {
  render() {
    return (
      <div className="ticket_cont clearfix">
        <div id="LeftContentRegion">
          <div className="ticket_left">
            <div className="seat_screen"> 美嘉欢乐影城三里屯店&nbsp;17TV(巨幕厅)
              <p id="enableSeatCoutRegion">（剩余399个座位）</p>
            </div>
            <SelectSeat />
            <div className="p20 tc">
            <span className="inblock mlr15"> <i className="seat_ture v_m mr3"></i>可选座位</span> <span className="inblock mlr15">
              <i className="seat_selected v_m mr3"></i>已选座位</span> <span className="inblock mlr15">
              <i className="seat_false v_m mr3"> </i>不可选座位</span> <span className="inblock mlr15">
              <i className="seat_lover v_m mr3"></i>情侣座位</span>
            </div>
            <p id="selectSeatPointOut" className="c_orange mt5 pl60 tl"></p>
          </div>
        </div>
        <div className="ticket_right" style={{background: "none"}}>
          <h2 className="tickettitle">电影票</h2>
          <dl className="new_ticket_pic fix mt20"> <dt><img width="60" alt="侏罗纪世界2" src="http://img5.mtime.cn/mt/2018/05/25/100000.65855294_75X100.jpg"></img></dt>
            <dd>
              <h2 className="px16">《侏罗纪世界2》</h2>
              <p className="mt9">类型：动作/冒险/科幻</p>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}
