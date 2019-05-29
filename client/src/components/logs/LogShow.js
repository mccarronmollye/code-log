import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLogs } from '../../actions';
import { deleteLog } from '../../reducers/logReducer'
import { connect } from 'react-redux'
import '../log.css'


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
        <i className={`big ${log.mood} outline icon`}></i>
       <div>
         <Link to={`/logs`} onClick={() => this.props.deleteLog(log.id)}> Delete </Link>
         <Link to={`#`}>Edit</Link>
       </div> </> : <Link to={`/logs`}>Back to Home Page</Link> }
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

export default connect(mapStateToProps, {getLogs, deleteLog})(LogShow)
