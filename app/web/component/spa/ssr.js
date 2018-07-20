import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SelectSeatPage from 'component/spa/components/selectSeatPage'
import HomePage from 'component/spa/components/homePage'
import CinemaPage from 'component/spa/components/cinemaPage'
import RegisterPage from 'component/spa/components/registerPage'
import Header from 'component/header/header';

import { Menu, Icon } from 'antd';

const HeaderWrapper = (Component, pageFlag) => () => {
  return (
    <div>
      <Header cur={pageFlag}/>
      <Component />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/ssr" exact component={HeaderWrapper(HomePage, 'M16_HeadNav_LeftNav_Index')}/>
        <Route path="/ssr/onlineticket" exact component={HeaderWrapper(SelectSeatPage, 'M16_HeadNav_LeftNav_Theater')}/>
        <Route path="/ssr/cinema" exact component={HeaderWrapper(CinemaPage, 'M16_HeadNav_LeftNav_Theater')} />
        <Route path="/ssr/register" exact component={HeaderWrapper(RegisterPage, 'M16_HeadNav_User_Reg')} />
      </Switch>
    )
  }
}

export default App;
