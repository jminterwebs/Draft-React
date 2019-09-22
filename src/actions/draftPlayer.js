/* eslint-disable func-names */
const draftPlayer = selectedPlayer => {
  return function(dispatch) {
    dispatch({
      type: 'DRAFT_PLAYER',
      payload: selectedPlayer
    });
  };
};

export default draftPlayer;
