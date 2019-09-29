export const addLikes = trail => {
  console.log(trail)
  return {
    type: 'ADD_LIKES',
    trail
  }
}