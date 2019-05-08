import React, { Component } from 'react'
import Cards from './Cards'
import CardInput from './CardInput'
import { connect } from 'react-redux'
import { addLog } from '../actions'

class CardContainer extends Component {
  render(){
    return(
    <div>
      <div className="daily-code-log" >
        <h1>Daily Code Log</h1>
      </div>
      <div className="card-input">
        <CardInput addLog={this.props.addLog}/>
      </div>
      <div className="code-logs" >
        <h3>Code Logs</h3>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
    )
  }
}

export default connect(null, {addLog})(CardContainer)
