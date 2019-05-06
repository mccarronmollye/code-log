import React, { Component } from 'react';
import './log.css'

class CardInput extends Component{

  constructor(props){
    super(props)

    this.state={
      title: '',
      date: '',
      learned: '',
      unsure: '',
      goals_accomplished: '',
      goals_tomorrow: '',
      mood: ''
    }
  }


  render(){
    return(
      <div className="log-form">
        <div className="ui form">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <div className="field">
                <label>Title:</label>
                <input type="text" placeholder="Day 2 of #100DaysOfCode"/>
              </div>
              <div className="field">
                <label>Date:</label>
                <input type="text" placeholder="01/01/19"/>
              </div>
              <div className="field">
                <label>Goals I accomplished today:</label>
                <textarea rows="2" placeholder="Built form for personal project."/>
              </div>
              <div className="field">
                <label>What I learned today:</label>
                <textarea rows="2" placeholder="Properly organizing Component files in React"/>
              </div>
              <div className="field">
                <label>What I don't understand:</label>
                <textarea rows="2" placeholder="How user input on the front end (React) will link to Rails backend of project."/>
              </div>
              <div className="field">
                <label>Goals for tomorrow:</label>
                <textarea rows="2" placeholder="Persist user input to the database."/>
              </div>
              <div className="field">
                <label>How I feel about my coding progress today:</label>
                <div>
                  <div className="ui radio checkbox">
                      <input type="radio" name="mood"/>
                      <label><i className="large smile outline icon"></i></label>
                  </div>
                </div>
                <div>
                  <div className="ui radio checkbox">
                      <input type="radio" name="mood"/>
                      <label><i className="large meh outline icon"></i></label>
                  </div>
                </div>
                <div className="ui radio checkbox">
                    <input type="radio" name="mood"/>
                    <label><i className="large frown outline icon"></i></label>
                </div>
              </div>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default CardInput;
