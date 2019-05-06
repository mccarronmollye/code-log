import React, { Component } from 'react'
import Cards from './Cards'
import CardInput from './CardInput'

class CardContainer extends Component {
  render(){
    return(
    <div>
      <CardInput/>
      <h3>Code Logs</h3>
      <Cards/>
    </div>
    )
  }
}


export default CardContainer
