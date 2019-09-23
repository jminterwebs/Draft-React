/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import update from 'immutability-helper';

export default function playerListReducer(
  state = {
    loading: false,
    players: [],
    draftedInfo: { round: 1, selection: 0, team: 1 }
  },

  action
) {
  switch (action.type) {
    case 'LOADING_PLAYERS':
      return { ...state, loading: true };
    case 'FETCH_PLAYERS':
      return { ...state, loading: false, players: action.payload };
    case 'DRAFT_PLAYER':
      const playerId = action.payload;
      const player = state.players.find(({ id }) => {
        return id === playerId;
      });
      const index = state.players.indexOf(player);

      const selection = state.draftedInfo.selection + 1;

      let team = selection % 10; // 1 % 10 =

      // eslint-disable-next-line no-unused-expressions
      team === 0 ? (team = 10) : team;

      const round = Math.floor((selection - 1) / 10) + 1;

      if (round % 2 === 0) {
        team = 11 - team;
      }

      console.log(`Team: ${team}`);
      console.log(`Selection: ${selection}`);
      console.log(`Round: ${round}`);

      state = update(state, {
        players: {
          [index]: {
            drafted: { $set: true },
            draftedRound: { $set: round },
            draftedSelection: { $set: selection },
            draftedTeam: { $set: team }
          }
        },
        draftedInfo: {
          round: { $set: round },
          selection: { $set: selection },
          team: { $set: team }
        }
      });

      return { ...state };
    default:
      return state;
  }
}
