import React, { Component } from 'react';
import LogFormContainer from './logs/LogFormContainer'
import LogListContainer from './logs/LogListContainer'
import LogList from './logs/LogList'
import LogShow from './logs/LogShow'
import Header from './Header'
import LogEditContainer from './logs/LogEditContainer'
import LogDelete from './logs/LogDelete'
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
            <Route path="/logs/new" exact component={LogFormContainer}/>
            <Route path ="/logs/edit/:id" exact component={LogEditContainer}/>
            <Route path ="/logs/:id" exact component={LogShow}/>
            <Route path ="/logs/delete" exact component={LogDelete}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
