import React, { Component } from 'react'
import LogEdit from './LogEdit'
import { fetchLog } from '../../actions'
import { connect } from 'react-redux'

class LogEditContainer extends Component {

   componentDidMount(){
     this.props.fetchLog(this.props.match.params.id)
   }

  render(){
    return(
      <div><LogEdit/></div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { log: state.logReducer.logs[ownProps.match.params.id]}
}

//logs: state.logReducer.logs

export default connect (mapStateToProps, {fetchLog})(LogEditContainer)


//Plan is that LogEditContainer will be like StreamEdit then LogEdit will be StreamForm
