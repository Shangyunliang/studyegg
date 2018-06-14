import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SearchBar from 'component/searchbar/searchBar';
import Footer from 'component/footer/footer'
import ClassSelect from './components/classSelect'
import FirstCard from './components/firstCard'
import OtherCard from './components/otherCard'
import UpComing from './components/upComing'
import FilmTip from './components/filmTip'

import { Menu, Icon } from 'antd';
class App extends Component {
  render() {
    return <div className="filmcon">
      <div className="isthefilm">
        <SearchBar />
        <div className="isthebox">
          <ClassSelect />
          <div id="hotplayContent">
            <div>
              <div class="moviebox clearfix">
                  <div class="firstmovie fl">
                    <FirstCard />
                  </div>
                  <div class="othermovie fr">
                    <ul class="clearfix">
                    <OtherCard/><OtherCard/><OtherCard/>
                    <OtherCard/><OtherCard/><OtherCard/>
                    </ul>
                  </div>
              </div>
            </div>
            <div id="hotplayMoreDiv" class="moviemore">
                <div class="othermovie">
                  <ul class="clearfix">
                  <OtherCard/><OtherCard/><OtherCard/>
                  <OtherCard/><OtherCard/><OtherCard/>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming" id="backHere">
        <div className="title">
            <h2>即将上映 －6月15日~9月12日 </h2>
        </div>
        <UpComing />
      </div>
      <FilmTip />
      <Footer />
    </div>;
  }
}

export default App;
