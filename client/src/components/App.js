import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { getLogs } from '../actions'
import CardContainer from './CardContainer'


class App extends Component {
  // componentDidMount(){
  //   this.props.getLogs();
  //  }

  render() {
    // const logs = this.props.logs.map((log, i) => <li key={i}>{log.title}</li>)

    return (
      <div>
        <CardContainer/>
      </div>
    )
  }
}
//Put underneath CardContainer if needed
// <h3>Logs</h3>
// <ul>
//   { this.props.loading ? <li>loading...</li> : logs }
// </ul>

// const mapStateToProps = state => {
//   return {
//     logs: state.logReducer.logs,
//     loading: state.logReducer.loading
//   }
// }
//
// export default connect(mapStateToProps, {getLogs})(App);
export default App
