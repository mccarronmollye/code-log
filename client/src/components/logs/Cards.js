import React, { Component } from 'react';
import './log.css'

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="ui cards">
          <div className="card">
            <div className="content">
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
  }

}

export default Card
