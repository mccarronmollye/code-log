import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLogs } from '../actions';
import { connect } from 'react-redux'
//import { deleteLog } from '../actions'


class LogShow extends Component {


  componentDidMount(){
    this.props.getLogs()
  }

  // handleOnClick(event) {
  //    let log = this.props.logs.find(log => log.id === this.props.match.params.id)
  //    this.props.deleteLog()
  // }


render(){

    let log = this.props.logs.find(log => log.id == this.props.match.params.id)

    return (
   <div className="card-container">
     <div className="ui card">
       { log ? <> <div className="content">
          <p>{log.date}</p>
         <h4 id="title">{log.title}</h4>
           <ul>
             <li>Goals I accomplished today: {log.goals_accomplished}</li>
             <li>What I learned: {log.learned}</li>
             <li>What I don't understand: {log.unsure}</li>
             <li>Goals for tomorrow: {log.goals_tomorrow}</li>
           </ul>
       </div>
       <div>
         <i className={`big ${log.mood} outline icon`}></i>
         <button onClick={() => this.handleOnClick()}>Delete</button>
         <a>Edit</a>
       </div> </> : 'Loading...'}
     </div>
   </div>
   )
 }
}

LogShow.defaultProps={
  logs: []
}

const mapStateToProps = state => {
  return {
    logs: state.logReducer.logs,
    loading: state.logReducer.loading
  }
}

export default connect(mapStateToProps, {getLogs})(LogShow)
