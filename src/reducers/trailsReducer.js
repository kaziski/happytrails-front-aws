export default (state = { trails: [] }, action) => {

  switch (action.type) {
    case "SET_TRAILS":
      debugger
      console.log("trails-reducer-state", state)
      return state
    default:
      return state
  }
}

//* Reducer
