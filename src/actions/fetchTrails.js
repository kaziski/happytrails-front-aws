export const fetchTrails = (lat, lng) => {
  return {
    type: "FETCH_TRAILS",
    lat, lng
  }
}