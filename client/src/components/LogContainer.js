import React, { Component } from 'react'
import LogList from './LogList'
import LogForm from './LogForm'
import { connect } from 'react-redux'
import { addLog } from '../actions'

class LogContainer extends Component {
  render(){
    return(
    <div>
      <div className="daily-code-log" >
        <h1>Daily Code Log</h1>
      </div>
      <div className="card-input">
        <LogForm addLog={this.props.addLog}/>
      </div>
      <div>
        <h3 className="code-logs">Code Logs</h3>
        <LogList/>
      </div>
    </div>
    )
  }
}

export default connect(null, {addLog})(LogContainer)
