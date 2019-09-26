export default function trailsReducer(state = { trails: [] }, action
) {
  console.log("trailReducer - action", action);
  debugger

  switch (action.type) {
    case "SET_TRAILS":
      alert("heyyyy")
      console.log("trails-reducer-state", state)
      return state
    default:
      return state
  }
}

//* Reducer
//! Type is not coming in as ""SET_TRAILS" also, it won't reach here unless I refresh the page
