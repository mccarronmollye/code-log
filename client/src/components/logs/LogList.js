import React, { Component } from 'react';
import { getLogs } from '../../actions'
import '../log.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import LogEdit from './LogEdit'

class LogList extends Component {

  componentDidMount(props){
    this.props.getLogs();
   }

  renderList = () => {

    return this.props.logs.map(log => {
      return (
            <div className="card" key={log.id}>
              <div className="content">
                <p>{log.date}</p>
                <div id="title">
                  <Link to={`/logs/${log.id}`}>{log.title}</Link>
                </div>
                  <ul>
                    <li>Goals I accomplished today: {log.goals_accomplished}</li>
                    <li>What I learned: {log.learned}</li>
                    <li>What I don't understand: {log.unsure}</li>
                    <li>Goals for tomorrow: {log.goals_tomorrow}</li>
                  </ul>
              </div>
              <div className="mood">
                <i className={`big ${log.mood} outline icon`}></i>
              </div>
            </div>
      )
    })
  }

  render(){
    return (
        <div className="card-container">
          <div className="ui two cards">{this.renderList()}</div>
        </div>
    )
  }
}

//{_.orderBy(this.renderList(), [log, date])}
const mapStateToProps = state => {
  return {
    logs: state.logReducer.logs,
    loading: state.logReducer.loading
  }
}

export default connect (mapStateToProps, {getLogs})(LogList)
