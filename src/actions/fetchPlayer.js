import axios from 'axios';

const fetchPlayerInfo = playerId => {
  return dispatch => {
    dispatch({ type: 'LOADING_PLAYER' });

    return axios
      .get(
        `http://api.fantasy.nfl.com/v1/players/details?playerId=${playerId}&statType=seasonStatsformat=json`
      )
      .then(res => {
        return res.data;
      })
      .then(res => {
        dispatch({ type: 'FETCH_PLAYER', payload: res.players }); // API returns player detail as players
      });
  };
};

export default fetchPlayerInfo;
