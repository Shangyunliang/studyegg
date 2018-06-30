import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import SearchBar from 'component/searchbar/searchBar';
import Footer from 'component/footer/footer'
import SilePic from 'component/sildePic/sildePic'
import ClassSelect from 'component/spa/components/classSelect'
import FirstCard from 'component/spa/components/firstCard'
import OtherCard from 'component/spa/components/otherCard'
import UpComing from 'component/spa/components/upComing'
import FilmTip from 'component/spa/components/filmTip'

export default class HomePage extends Component {
  render() {
    return <div>
      <Helmet>
        <link rel="stylesheet" href="/public/css/cinema.css"></link>
        <link rel="stylesheet" href="/public/css/ticket.css"></link>
      </Helmet>
      <SilePic />
      <div className="filmcon">
        <div className="isthefilm">
          <SearchBar />
          <div className="isthebox">
            <ClassSelect />
            <div id="hotplayContent">
              <div>
                <div class="moviebox clearfix">
                    <div class="firstmovie fl">
                      <FirstCard />
                      <Link to="/ssr/onlineticket">GOUPIAO</Link>
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
      </div>
    </div>;
  }
}
