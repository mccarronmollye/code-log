import React, { Component } from 'react';
import LogFormContainer from './LogFormContainer'
import LogListContainer from './LogListContainer'
import LogList from './LogList'
import LogShow from './LogShow'
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
            <Route path ="/logs" exact component={LogList}/>
            <Route path="/new" exact component={LogFormContainer}/>
            <Route path ="/logs/:id" component={LogShow}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
