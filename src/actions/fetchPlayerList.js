import axios from 'axios';

export const fetchAvailablePlayers = () => {
  return function(dispatch) {
    dispatch({ type: 'LOADING_PLAYERS' });

    return axios
      .all([
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=0'
        ),
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=100'
        ),
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=200'
        ),
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=300'
        ),
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=400'
        ),
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=500'
        )
      ])
      .then(
        axios.spread(function(
          players1,
          players2,
          players3,
          players4,
          players5
        ) {
          let fullPlayerList = {
            players: [],
            statusText: 'OK'
          };

          players1.statusText === 'OK'
            ? (fullPlayerList.players = fullPlayerList.players.concat(
                players1.data.players
              ))
            : (fullPlayerList.statusText = 'Error');

          players2.statusText === 'OK'
            ? (fullPlayerList.players = fullPlayerList.players.concat(
                players2.data.players
              ))
            : (fullPlayerList.statusText = 'Error');

          players3.statusText === 'OK'
            ? (fullPlayerList.players = fullPlayerList.players.concat(
                players3.data.players
              ))
            : (fullPlayerList.statusText = 'Error');

          players4.statusText === 'OK'
            ? (fullPlayerList.players = fullPlayerList.players.concat(
                players4.data.players
              ))
            : (fullPlayerList.statusText = 'Error');

          players5.statusText === 'OK'
            ? (fullPlayerList.players = fullPlayerList.players.concat(
                players5.data.players
              ))
            : (fullPlayerList.statusText = 'Error');

          return fullPlayerList;
        })
      )
      .then(fullPlayerList => {
        dispatch({ type: 'FETCH_PLAYERS', payload: fullPlayerList });
      });
  };
};
