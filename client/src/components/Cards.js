import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLogs } from '../actions'
import './log.css'

class Cards extends Component {
  componentDidMount(){
    this.props.getLogs();
   }

  renderList(){
    return this.props.logs.map(log => {
      return (
        <div className="card-container">
          <div className="ui cards">
            <div className="card" key={log.id}>
              <div className="content">
                <p>Date</p>
                <h4 id="title">{log.title}</h4>
                  <ul>
                    <li>Goals I accomplished today:</li>
                    <li>What I learned:</li>
                    <li>What I don't understand:</li>
                    <li>Goals for tomorrow:</li>
                  </ul>
              </div>

              <div className="feelings">
                <i className="smile outline icon"></i>
                <i className="meh outline icon"></i>
                <i className="frown outline icon"></i>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }











  // render() {
  //   const logs = this.props.logs.map((log, i) => <li key={i}>{log.title}</li>)
  //
  //   return (
      // <div className="card-container">
      //   <div className="ui cards">
      //     <div className="card">
      //       <div className="content">
      //         <p>Date</p>
      //         <h4 id="title">Title</h4>
      //           <ul>
      //             <li>Goals I accomplished today:</li>
      //             <li>What I learned:</li>
      //             <li>What I don't understand:</li>
      //             <li>Goals for tomorrow:</li>
      //           </ul>
      //           <h3>Logs</h3>
      //           <ul>
      //             { this.props.loading ? <li>loading...</li> : logs }
      //           </ul>
      //       </div>
      //       <div className="feelings">
      //         <i className="smile outline icon"></i>
      //         <i className="meh outline icon"></i>
      //         <i className="frown outline icon"></i>
      //       </div>
      //     </div>
      //   </div>
      // </div>
  //   )
  // }

}

const mapStateToProps = state => {
  return {
    logs: state.logReducer.logs,
    loading: state.logReducer.loading
  }
}

export default connect(mapStateToProps, {getLogs})(Cards);
