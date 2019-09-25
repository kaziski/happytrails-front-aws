const intialState = {
  lat: null,
  lng: null
}

export default (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_TRAILS":
      return action.coodinates
    default:
      return state
  }
}