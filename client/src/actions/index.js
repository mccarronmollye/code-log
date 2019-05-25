import logs from '../apis/logs'

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

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


export const addLog = (log, history) => {
  return dispatch => {
    return fetch('/logs', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({log})
    }).then(resp => resp.json())
      .then(log => {
          dispatch({type: "ADD_LOG", log})
          history.push('/logs')
      }
    )
  }
}

export const deleteLog = (log) => {
  return dispatch => {
    return fetch(`/logs`, {
      method: "DELETE",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({log})
    }).then(resp => resp.json())
      .then(log => dispatch({type: "DELETE_LOG", log}))
  }
}

export const updateLog = (log) => {
  return dispatch => {
    return fetch(`/logs/${log.id}`, {
      method: "PUT",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({log})
    }).then(resp => resp.json())
      .then(log => dispatch({type: "EDIT_LOG", log}))
  }
}

export const fetchLog = (id) => async dispatch => {
  const response = await logs.get(`logs/${id}`)

  dispatch({ type: 'FETCH_LOG', payload: response.data})
}
