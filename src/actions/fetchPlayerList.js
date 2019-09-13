import axios from 'axios';

const fetchAvailablePlayers = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_PLAYERS' });

    return axios
      .all([
        // 0-100
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=0'
        ),
        // 101-200
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=100'
        ),
        // 201-300
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=200'
        ),
        // 301-400
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=300'
        ),
        // 401-500
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=400'
        ),
        // 501-600
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/editordraftranks?count=100&format=json&offset=500'
        ),
        // research info
        axios.get(
          'https://api.fantasy.nfl.com/v1/players/researchinfo?format=json&count=500&sort=percentOwned'
        )
      ])
      .then(
        axios.spread(
          (
            players1,
            players2,
            players3,
            players4,
            players5,
            players6,
            researchinfo
          ) => {
            const fullPlayerList = {
              players: []
            };

            fullPlayerList.players = fullPlayerList.players
              .concat(players1.data.players)
              .concat(players2.data.players)
              .concat(players3.data.players)
              .concat(players4.data.players)
              .concat(players5.data.players)
              .concat(players6.data.players);

            const commonPlayers = fullPlayerList.players.map(rankedPlayer => {
              const infoPlayer = researchinfo.data.players.find(
                fullInfoPlayer => {
                  return fullInfoPlayer
                    ? fullInfoPlayer.id === rankedPlayer.id
                    : '';
                }
              );
              return [infoPlayer, rankedPlayer];
            });

            const mergedPlayers = commonPlayers.map(player => {
              return { ...player[0], ...player[1] };
            });

            const finalPlayers = mergedPlayers.filter(player => {
              return (
                player.position === 'QB' ||
                player.position === 'RB' ||
                player.position === 'WR' ||
                player.position === 'TE' ||
                player.position === 'K' ||
                player.position === 'DEF'
              );
            });
            finalPlayers.map((player, index) => {
              return (player.rank = index + 1); // eslint-disable-line no-return-assign, no-param-reassign
            });
            return finalPlayers;
          }
        )
      )
      .then(finalPlayers => {
        dispatch({ type: 'FETCH_PLAYERS', payload: finalPlayers });
      });
  };
};

export default fetchAvailablePlayers;
