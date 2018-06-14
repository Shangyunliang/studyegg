import React, {
  Component
} from 'react';

export default class FilmTip extends Component {
  render() {
    return  <div className="filmtip">
          <div className="filmtipbox">
             <ul className="clearfix">
                <li className="first">
                <a href="http://piao.mtime.com" target="_blank" className="c_333" style={{textDecoration:"none"}}>
                   <div className="moviecard">
                   </div>
                </a>
                </li>

                <li>
                   <div className="ticketoline">
                      <h2>如何在线选座购票：</h2>
                      <p></p>
                   </div>
                </li>
                <li className="last telbox">
                  <span className="fr tel"><b>客服电话：</b>4006-118-118</span> <b>影院商务合作：</b> <a href="http://theater.mtime.com/report/1" target="_blank">影院开业</a>
                  <span className="mline">｜</span> <a href="http://theater.mtime.com/report/4/" target="_blank">影讯合作</a>
                  <span className="mline">｜</span> <a href="http://theater.mtime.com/report/2/" target="_blank">在线购票</a>
                  <span className="mline">｜</span> <a href="http://theater.mtime.com/report/1/" target="_blank" className="link_green">联系时光网</a>
                </li>
             </ul>
          </div>
       </div>
  }
}
