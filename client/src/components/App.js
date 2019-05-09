import React, { Component } from 'react';
import LogFormContainer from './LogFormContainer'
import LogListContainer from './LogListContainer'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <h1><Header/></h1>
            <Route path="/" exact component={LogListContainer}/>
            <Route path="/logs" exact component={LogListContainer}/>
            <Route path="/new" exact component={LogFormContainer}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
