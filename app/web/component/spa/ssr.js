import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SelectSeatPage from 'component/spa/components/selectSeatPage'
import HomePage from 'component/spa/components/homePage'
import CinemaPage from 'component/spa/components/cinemaPage'
import RegisterPage from 'component/spa/components/registerPage'


import { Menu, Icon } from 'antd';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/ssr" exact component={HomePage}/>
        <Route path="/ssr/onlineticket" exact component={SelectSeatPage}/>
        <Route path="/ssr/cinema" exact component={CinemaPage} />
        <Route path="/ssr/register" exact component={RegisterPage} />
      </Switch>
    )
  }
}

export default App;
