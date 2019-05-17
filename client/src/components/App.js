import React, { Component } from 'react';
import LogForm from './LogForm'
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
            <Route path="/logs/new" exact component={LogCreate}/>
            <Route path ="/logs/edit/:id" exact component={LogEdit}/>
            <Route path ="/logs/:id" exact component={LogShow}/>
            <Route path ="/logs/delete" exact component={LogDelete}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
