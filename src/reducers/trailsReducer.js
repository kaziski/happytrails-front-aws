export default (state = [], action) => {

  switch (action.type) {
    case 'SET_TRAIL':
      return action.trailsData.trails

    default:
      return state
  }
}

//* Reducer
