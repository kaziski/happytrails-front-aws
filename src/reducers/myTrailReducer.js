export default (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_TRAILS':
      return action.trailsObj
    default:
      return state
  }
}