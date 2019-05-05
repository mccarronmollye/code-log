import React, { Component } from 'react';
import Card from './Card'


class App extends Component {
  componentDidMount(){
    window.fetch('/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div><Card/></div>
    )
  }

}



export default App;
