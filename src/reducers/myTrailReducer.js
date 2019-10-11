export default (state = { myTrailsArr: [] }, action) => {
  switch (action.type) {
    case 'GET_SAVED_TRAILS':
      // return {
      //   ...state,
      //   myTrailsArr: action.trailsObj.data
      // }
      return { myTrailsArr: action.trailsObj.data }
    case 'ADD_ACCOUNT':
    default:
      return state
  }
}
