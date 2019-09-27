export default (state = [], action) => {

  switch (action.type) {
    case "SET_TRAILS":
      return action.trailsData.trails

    default:
      return state
  }
}

//* Reducer
