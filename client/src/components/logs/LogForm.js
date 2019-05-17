import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './log.css'

class LogForm extends Component{

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render(){
    return(
      <div className="log-form">
        <div className="ui form">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
              <Field name="title" component={this.renderInput} label="Title:"/>
              <Field name="date" component={this.renderInput} label="Date:"/>
              <Field name="goals_accomplished" component={this.renderInput} label="Goals I accomplished today:"/>
              <Field name="learned" component={this.renderInput} label="What I learned today:"/>
              <Field name="unsure" component={this.renderInput} label="What I don't understand:"/>
              <Field name="goals_tomorrow" component={this.renderInput} label="Goals for tomorrow:"/>
              <label>How I feel about my coding progress today:</label>
                <div>
                  <label><Field name="mood" component={input} type="radio" value="smile"/> :)</label>
                  <label><Field name="mood" component={input} type="radio" value="nuetral"/> :|</label>
                  <label><Field name="mood" component={input} type="radio" value="frown"/> :(</label>
               </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'logForm'
}) (LogForm);
// title: '',
//       date: '',
//       learned: '',
//       unsure: '',
//       goals_accomplished: '',
//       goals_tomorrow: '',
//       mood: 'smile'
