import React, {Component} from 'react'
import LogList from './LogList'
import { getLogs } from '../actions'
import { connect } from 'react-redux'

class LogListContainer extends Component {
  render(){
    return(
      <div>
        <h3 className="code-logs">Code Logs</h3>
        <LogList/>
      </div>
    )
  }
}

export default LogListContainer
