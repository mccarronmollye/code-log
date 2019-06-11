import React, { Component } from 'react';
import '../log.css'

class LogEdit extends Component{

  constructor(props){
    super(props)

    this.state={
      title: '',
      date: '',
      learned: '',
      unsure: '',
      goals_accomplished: '',
      goals_tomorrow: '',
      mood: 'smile'
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.updateLog(this.state)
    this.setState({
      title: '',
      date: '',
      learned: '',
      unsure: '',
      goals_accomplished: '',
      goals_tomorrow: '',
      mood: 'smile'
    })
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
                  required
                />
              </div>
              <div className="field">
                <label>Date:</label>
                <input
                  name="date"
                  type="date"
                  value={this.state.date}
                  onChange={(event) => this.handleOnChange(event)}
                  required
                  />
              </div>
              <div className="field">
                <label>Goals I accomplished today:</label>
                <textarea
                  name="goals_accomplished"
                  rows="2"
                  value={this.state.goals_accomplished}
                  onChange={(event) => this.handleOnChange(event)}
                  required
                  />
              </div>
              <div className="field">
                <label>What I learned today:</label>
                <textarea
                  name="learned"
                  rows="2"
                  value={this.state.learned}
                  onChange={(event) => this.handleOnChange(event)}
                  required
                />
              </div>
              <div className="field">
                <label>What I don't understand:</label>
                <textarea
                  name="unsure"
                  rows="2"
                  value={this.state.unsure}
                  onChange={(event) => this.handleOnChange(event)}
                  required
                  />
              </div>
              <div className="field">
                <label>Goals for tomorrow:</label>
                <textarea
                  name="goals_tomorrow"
                  rows="2"
                  value={this.state.goals_tomorrow}
                  onChange={(event) => this.handleOnChange(event)}
                  required
                  />
              </div>
              <div className="field">
                <label>How I feel about my coding progress today:</label>
                  <div>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="mood"
                      value="smile"
                      checked={this.state.mood === "smile" ? true : false}
                      onChange={this.handleOnChange}
                      />
                    <label><i className="big smile outline icon"/></label>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="mood"
                      value="meh"
                      checked={this.state.mood === "meh" ? true : false}
                      onChange={this.handleOnChange}
                      />
                    <label><i className="big meh outline icon"/></label>
                    <input
                      className="ui radio checkbox space"
                      type="radio"
                      name="mood"
                      value="frown"
                      checked={this.state.mood === "frown" ? true : false}
                      onChange={this.handleOnChange}
                      />
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

export default LogEdit;
