import React, { Component } from 'react';
import CardContainer from './logs/CardContainer'


class App extends Component {
  componentDidMount(){
    window.fetch('/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div><CardContainer/></div>
    )
  }

}



export default App;
