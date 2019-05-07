export const getLogs = () => {
  return dispatch => {
    dispatch({type: "LOADING_LOGS"});
    return fetch('/logs')
      .then(resp => resp.json())
      .then(logs => dispatch({type: "LOADED_LOGS", payload: logs}))
  }
}
