import axios from 'axios';

const fetchAvailablePlayers = () => {
  return dispatch => {
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
        axios.spread((players1, players2, players3, players4, players5) => {
          const fullPlayerList = {
            players: []
          };

          fullPlayerList.players = fullPlayerList.players
            .concat(players1.data.players)
            .concat(players2.data.players)
            .concat(players3.data.players)
            .concat(players4.data.players)
            .concat(players5.data.players);

          return fullPlayerList;
        })
      )
      .then(fullPlayerList => {
        dispatch({ type: 'FETCH_PLAYERS', payload: fullPlayerList });
      });
  };
};

export default fetchAvailablePlayers;
