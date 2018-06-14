import React, {
  Component
} from 'react';
import './searchBar.css';

export default class searchBar extends Component {
  render() {
    return <div id="ticketSearchFixDiv" className="onlineticket">
    <div className="midbox">
      <div className="cityselect"><h2>北京</h2>
      <div id="changeCityDiv">
        <a href="#" className="citylink __r_c_" pan="M14_TheaterIndex_Search_City">切换城市</a>
      </div>
      </div>
    </div>
    </div>
  }
}
