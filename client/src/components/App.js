import React, { Component } from 'react';
import LogFormContainer from './LogFormContainer'
import LogListContainer from './LogListContainer'
import LogList from './LogList'
import LogShow from './LogShow'
import Header from './Header'
import LogEdit from './LogEdit'
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
            <Route path ="/log/edit" exact component={LogEdit}/>
            <Route path ="/logs/:id" exact component={LogShow}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
