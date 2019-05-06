import React, { Component } from 'react';
import './CardInput.css'

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
                <input type="text" placeholder="title"/>
              </div>
              <div className="field">
                <label>Date:</label>
                <input type="text" placeholder="date"/>
              </div>
              <div className="field">
                <label>Goals I accomplished today:</label>
                <textarea rows="2" placeholder="goals accomplished..."/>
              </div>
              <div className="field">
                <label>What I learned today:</label>
                <textarea rows="2" placeholder="what I learned..."/>
              </div>
              <div className="field">
                <label>What I don't understand:</label>
                <textarea rows="2" placeholder="what I don't understand..."/>
              </div>
              <div className="field">
                <label>Goals for tomorrow:</label>
                <textarea rows="2" placeholder="goals for tomorrow..."/>
              </div>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default CardInput;
