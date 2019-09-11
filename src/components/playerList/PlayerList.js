import React, { useContext } from 'react';

import PlayerItem from './PlayerItem';

import PlayerListContext from '../../player-context';

export default function PlayerList(props) {
  const playerList = useContext(PlayerListContext);

  const { players } = playerList;
  const { selectedPlayer } = props;

  return (
    <ul className="player-list">
      {players.map(player => {
        return <PlayerItem player={player} selectedPlayer={selectedPlayer} />;
      })}
    </ul>
  );
}

// auction: "67"
// depthChartOrder: null
// esbid: "BAR192674"
// firstName: "Saquon"
// gsisPlayerId: "00-0034844"
// id: "2558019"
// injuryGameStatus: null
// jerseyNumber: "41"
// lastName: "Barkley"
// name: "Alvin Kamara"
// notes: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// numAdds: 24
// numDrops: 24
// opponentTeamAbbr: "@DAL"
// percentOwned: "100.0"
// percentOwnedChange: false
// percentStarted: "99.4"
// percentStartedChange: false
// position: "RB"
// rank: "1"
// status: "ACT"
// stock: "even"
// teamAbbr: "NYG"
// videos: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// weeks: (17) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// __proto__: Object
