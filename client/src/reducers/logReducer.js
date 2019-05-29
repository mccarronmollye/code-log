import {destroyLog} from '../actions'

export const deleteLog = (id) => {
  return (dispatch) => {
    destroyLog(id).then(() => dispatch(removeLog(id)))
  }
}

export const removeLog = (id) => ({type: 'DELETE_LOG'})

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

    case "UPDATE_LOG":
      return {
        //map through existing logs and update log that needs to be updated.
      }

    default:
      return state;
  }
}
