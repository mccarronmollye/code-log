import React, { Component } from 'react'
import LogEdit from './LogEdit'
import fetchLog from '../../actions'

class LogEditContainer extends React.Component {

  // componentDidMount(){
  //   this.props.fetchLog(this.props.match.params.id)
  // }

  render(){
    return(
      <div><LogEdit/></div>
    )
  }
}

export default LogEditContainer


//Plan is that LogEditContainer will be like StreamEdit then LogEdit will be StreamForm
