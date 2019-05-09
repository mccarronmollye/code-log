export const getLogs = () => {
  return dispatch => {
    dispatch({type: "LOADING_LOGS"});
    return fetch('/logs')
      .then(resp => resp.json())
      .then(logs => dispatch({type: "LOADED_LOGS", payload: logs}))
  }
}

// export const getLog = () => {
//   return dispatch => {
//     dispatch({type: "LOADING_LOG"});
//     return fetch('/logs/')
//       .then(resp => resp.json())
//       .then(logs => dispatch({type: "LOADED_LOG", payload: log}))
//   }
// }

//return function (dispatch)
  //dispatch action to start the loading proccess
  // return fetch url
    //get response
    //dispatch data


export const addLog = (log) => {
  return dispatch => {
    return fetch('/logs', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({log})
    }).then(resp => resp.json())
      .then(log => dispatch({type: "ADD_LOG", log}))
  }
}
