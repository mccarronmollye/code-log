import React, {Component} from 'react'
import LogList from './LogList'
import { getLogs } from '../actions'
import { connect } from 'react-redux'

class LogListContainer extends Component {
  render(){
    return(
      <div>
        <h3 className="code-logs">Code Logs</h3>
        <LogList getLogs={this.props.getLogs}/>
      </div>
    )
  }
}

export default connect(null, {getLogs})(LogListContainer)
