import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Jokes from './components/Jokes';

import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/login" render={(props) => <SignIn loginHandler={this.loginHandler} {...props}/>} />
        <Route path="/register" render={(props) => <SignIn loginHandler={this.loginHandler} {...props}/>} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
