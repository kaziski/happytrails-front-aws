//* Reducer
//? Not sure if I need this...
export default function manageLikes(state = {
  savedTrails: []
}, action) {
  switch (action.type) {
    case 'ADD_LIKES':
      return {
        ...state,
        savedTrails: [...state.savedTrails, action.trail]
      }

    default:
      return state
  }
}

