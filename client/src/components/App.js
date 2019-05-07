import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLogs } from '../actions'
import CardContainer from './logs/CardContainer'


class App extends Component {
  componentDidMount(){
    this.props.getLogs();

  //   window.fetch('/users')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(error => console.log(error))
   }

  render() {
    const logs = this.props.logs.map((log, i) =>

      <li key={i}>{log.title}</li>)

    return (
      <div>
        <CardContainer/>
        <h3>Logs</h3>
        <ul>
          { this.props.loading ? <li>loading...</li> : logs }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    logs: state.logReducer.logs,
    loading: state.logReducer.loading
  }
}

export default connect(mapStateToProps, {getLogs})(App);
