export default (state = { myTrailsArr: [] }, action) => {
  switch (action.type) {
    case 'GET_SAVED_TRAILS':
      return { myTrailsArr: action.trailsObj.data }
    default:
      return state
  }
}
