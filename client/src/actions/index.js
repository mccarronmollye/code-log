import logs from '../apis/logs'
import axios from 'axios'

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
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

export const destroyLog = (id) => {
  return fetch(`/logs/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const updateLog = (log) => {
    return fetch(`/logs/${log.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(log)
    }).then(resp => resp.json())
}

//.then(log => dispatch({type: "EDIT_LOG", log})) line 60.

export const fetchLog = (id) => async dispatch => {
  const response = await logs.get(`logs/${id}`)

  dispatch({ type: 'FETCH_LOG', payload: response.data})
}
