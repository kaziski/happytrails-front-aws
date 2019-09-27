export const setTrails = trailsData => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TRAILS',
      trailsData
    })
  }
}
