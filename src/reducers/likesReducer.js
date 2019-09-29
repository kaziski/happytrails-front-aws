export default function manageLikes(state = {
  likedTrails: []
}, action) {
  switch (action.type) {
    case 'ADD_LIKES':
      return {
        ...state,
        likedTrails: [...state.likedTrails, action.trail]
      }

    default:
      return state
  }
}

//* Reducer