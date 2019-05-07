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
                <p>{log.date}</p>
                <h4 id="title">{log.title}</h4>
                  <ul>
                    <li>Goals I accomplished today: {log.goals_accomplished}</li>
                    <li>What I learned: {log.learned}</li>
                    <li>What I don't understand: {log.unsure}</li>
                    <li>Goals for tomorrow: {log.goals_tomorrow}</li>
                  </ul>
              </div>
              <div className="feelings">
                <i className={`big ${log.mood} outline icon`}></i>
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

}

const mapStateToProps = state => {
  return {
    logs: state.logReducer.logs,
    loading: state.logReducer.loading
  }
}

export default connect(mapStateToProps, {getLogs})(Cards);
