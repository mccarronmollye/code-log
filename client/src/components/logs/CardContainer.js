import React, { Component } from 'react'
import Cards from './Cards'
import CardInput from './CardInput'

class CardContainer extends Component {
  render(){
    return(
    <div>
      <CardInput/>
      <Cards/>
    </div>
    )
  }
}


export default CardContainer
