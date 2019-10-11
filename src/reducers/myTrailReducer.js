export default (state = { mytrails: [] }, action) => {
  switch (action.type) {
    case 'SET_MY_TRAILS':
      return {
        ...state,
        mytrails: action.trailsObj.data
      }
    default:
      return state
  }
}
