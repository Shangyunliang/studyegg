import React, {
  Component
} from 'react';

export default class classSelect extends Component {
  render() {
    return  <div className="title clearfix">
                <h2 className="fl">正在热映<span>53</span>部</h2>
                <div id="hotplayMenu" className="filmlink fl __r_c_" pan="M14_TheaterIndex_HotplayMenu">
                    <a href="#" className="on" onClick={()=>{}}>全部<span>|</span></a>
                    <a href="#" onClick={()=>{}}>3D<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">IMAX<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">喜剧<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">动作<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">冒险<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">爱情<span>|</span></a>
                    <a href="#" onClick={()=>{}} className="">悬疑</a>
                </div>
                <div className="citysearch __r_c_" pan="M14_TheaterIndex_HotplaySearch">
                    <input id="hotplaySearchText" type="text" className="text c_a5" placeholder="搜索影片" autoComplete="off"></input>
                    <input id="hotplaySearchButton" type="button" className="button"></input>
                </div>
                <dl id="hotplaySearchResultDl" className="showsearch searchcity __r_c_" style={{display:"none", top:"42px"}} pan="M14_TheaterIndex_HotplaySearch">
                </dl>
            </div>
  }
}
