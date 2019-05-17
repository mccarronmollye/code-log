import React, { Component } from 'react'
import LogForm from './LogForm'
import { connect } from 'react-redux'
import { addLog } from '../../actions'

class LogFormContainer extends Component {
  render(){
    return(
    <div>
      <div className="daily-code-log" >
        <h1>Daily Code Log</h1>
      </div>
      <div className="card-input">
        <LogForm addLog={this.props.addLog} history={this.props.history}/>
      </div>
    </div>
    )
  }
}

//change addLog=  to onFormSubmit add logic to addLog or updateLog depending on route taken
//let log = this.props.logs.find(log => log.id == this.props.match.params.id)

export default connect(null, {addLog})(LogFormContainer)
