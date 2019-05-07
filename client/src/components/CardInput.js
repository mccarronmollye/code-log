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

  handleOnChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.addCodeLog(this)
  }


  render(){
    return(
      <div className="log-form">
        <div className="ui form">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <div className="field">
                <label>Title:</label>
                <input
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="Day 2 of #100DaysOfCode"
                />
              </div>
              <div className="field">
                <label>Date:</label>
                <input
                  name="date"
                  type="text"
                  value={this.state.date}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="01/01/19"
                  />
              </div>
              <div className="field">
                <label>Goals I accomplished today:</label>
                <textarea
                  name="goals_accomplished"
                  rows="2"
                  value={this.state.goals_accomplished}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="Built form for personal project."
                  />
              </div>
              <div className="field">
                <label>What I learned today:</label>
                <textarea
                  name="learned"
                  rows="2"
                  value={this.state.learned}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="Properly organizing Component files in React"
                />
              </div>
              <div className="field">
                <label>What I don't understand:</label>
                <textarea
                  name="unsure"
                  rows="2"
                  value={this.state.unsure}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="How user input on the front end (React) will link to Rails backend of project."
                  />
              </div>
              <div className="field">
                <label>Goals for tomorrow:</label>
                <textarea
                  name="goals_tomorrow"
                  rows="2"
                  value={this.state.goals_tomorrow}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="Persist user input to the database."
                  />
              </div>
              <div className="field">
                <label>How I feel about my coding progress today:</label>
                <div className="ui radio checkbox space">
                    <input
                      type="radio"
                      name="smile"
                      />
                    <label><i className="big smile outline icon"/></label>
                </div>
                <div className="ui radio checkbox space">
                    <input
                      type="radio"
                      name="mwh"
                      />
                    <label><i className="big meh outline icon"/></label>
                </div>
                <div className="ui radio checkbox space">
                    <input
                      type="radio"
                      name="frown"/>
                    <label><i className="big frown outline icon"/></label>
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