import {destroyLog, updateLog} from '../actions'

export const deleteLog = (id, history) => {
  return (dispatch) => {
    destroyLog(id).then(() => dispatch(removeLog(id)))
  }
  history.push('/')
}

export const removeLog = (id) => ({type: 'DELETE_LOG'})

export const editLog = (id) => {
  return (dispatch, getState) => {
    const {logs} = getState().log
    const log = logs.find(t => t.id == id)
    const data = getState(id) //change this line!!!
    updateLog(data)
      .then(res => dispatch(replaceLog(res)))
  }
}

export const replaceLog = (log) => ({type: 'LOG_REPLACE', payload: log })

export default (state = {logs: [], loading: false}, action) => {
  switch (action.type){
    case "LOADING_LOGS":
      return {
        ...state,
        loading: true
      }
    case "LOADED_LOGS":
      return {
        ...state,
        loading: false,
        logs: action.payload
      }

    case "ADD_LOG":
      return {
        ...state,
        logs: [...state.logs, action.log]
      }

    case "DELETE_LOG":
      const logs = state.logs.filter(log => log.id !== action.id)
      return {
        ...state,
        logs
      }

    case "LOG_REPLACE":
      return {
        ...state,
        logs: state.logs
          .map(log => log.id === action.payload.id ? action.payload : log)
      }

    default:
      return state;
  }
}
