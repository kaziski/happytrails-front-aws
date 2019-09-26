export default function trailsReducer(
  state = {
    trails: []
  },
  action
) {
  console.log("trailReducer - action", action);

  switch (action.type) {
    case "FETCH_TRAILS":
      alert("heyyyy")
      console.log("trails-reducer-state", state)
      return state
    default:
      return state
  }
}

//* Reducer