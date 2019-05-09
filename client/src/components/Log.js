import React, { Component } from 'react';

class LogForm extends Component{
  render(){
    return(
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
        <div>
          <i className={`big ${log.mood} outline icon`}></i>
          <Link to={`/logs/${log.id}`}>View Log</Link>
        </div>
      </div>
    )
  }
}
