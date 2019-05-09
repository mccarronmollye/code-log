import React, { Component } from 'react'
import LogList from './LogList'
import LogForm from './LogForm'
import { connect } from 'react-redux'
import { addLog } from '../actions'

class LogFormContainer extends Component {
  render(){
    return(
    <div>
      <div className="daily-code-log" >
        <h1>Daily Code Log</h1>
      </div>
      <div className="card-input">
        <LogForm addLog={this.props.addLog}/>
      </div>
    </div>
    )
  }
}

export default connect(null, {addLog})(LogFormContainer)
