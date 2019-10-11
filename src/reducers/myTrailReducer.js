export default (state = { mySavedTrailsArr: [] }, action) => {
  switch (action.type) {
    case 'ADD_SAVE_TRAIL':
      return { ...state, mySavedTrailsArr: action.trail }
    case 'GET_SAVED_TRAILS':
      return { mySavedTrailsArr: action.trailsObj.data }
    default:
      return state
  }
}
