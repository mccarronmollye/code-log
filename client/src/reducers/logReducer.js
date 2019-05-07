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
    default:
      return state;
  }
}
