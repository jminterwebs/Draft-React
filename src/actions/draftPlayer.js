//         // http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json&count=100&offset=100

//         import fetch from 'isomorphic-fetch';

// export const fetchAvailablePlayers = () => {
//   return function(dispatch) {
//     dispatch({ type: 'LOADING_PLAYERS' });

//     return fetch(
//       'https://api.fantasy.nfl.com/v1/players/userdraftranks?count=100&format=json&offset=0'
//     )
//       .then(res => {
//         return res.json();
//       })
//       .then(responseJson => {
//         dispatch({ type: 'Fetch_PLAYERS', payload: responseJSON });
//       });
//   };
// };
