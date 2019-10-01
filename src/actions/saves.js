//* Action

// export const saveTrails = trail => {
//   return dispatch => {
//     console.log("trail in saveTrails", trail)
//     //the key trail is the required key in Trail strong params
//     //the value trail is what's passed into this component
//     const trailInfo = {
//       trail: trail
//     }

//     return fetch("http://localhost:3000/api/v1/newtrail", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         Accept: 'application/json', "Content-Type":
//           'application/json'
//       },
//       body: JSON.stringify(trailInfo)
//     })
//       .then(res => res.json())
//       // .then(trail => console.log("in fetch addlikis- trail", trail)
//       .then(trail => {
//         if (trail.error) {
//           alert(trail.error)
//         } else {
//           console.log(trail)
//         }
//       })
//       .catch(console.logs)
//   }
// }

// export const addLikes = trail => {
//   return {
//     type: 'ADD_LIKES',
//     trail
//   }
// }
//? Do I need this action if I'm saving each trail?