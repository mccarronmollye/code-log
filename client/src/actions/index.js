export const getLogs = () => {
  return dispatch => {
    dispatch({type: "LOADING_LOGS"});
    return fetch('/logs')
      .then(resp => resp.json())
      .then(logs => dispatch({type: "LOADED_LOGS", payload: logs}))
  }
}

//return function (dispatch)
  //dispatch action to start the loading proccess
  // return fetch url
    //get response
    //dispatch data


export const addLog = (log) => {
  return dispatch => {
    dispatch({type: "ADD_LOG"})
    return fetch('/logs', {
      method: "POST",
    }).then(response => response.json())
    .then(log => dispatch({type: "ADD_LOG"}))
  }
}

// export const addLog = (log) => {
//   return dispatch => {
//     dispatch({type: "ADD_LOG"})
//     return fetch('/logs', {
//       method: "POST",
//       headers:{
//         "Cotent-Type": "application/json"
//       }
//     }).then(response => response.json())
//   }
// }
