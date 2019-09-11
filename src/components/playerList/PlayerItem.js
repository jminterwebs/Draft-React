import React from 'react';

import { Avatar, Label } from 'jmdesign';

import './playerList.scss';

export default function PlayerList(props) {
  const { player, selectedPlayer } = props;
  const { id, firstName, lastName, rank, teamAbbr, position } = player;

  return (
    <li
      key={id}
      className={`player-item ${position}`}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onClick={() => selectedPlayer(id)}
      onKeyDown={() => selectedPlayer(id)}>
      <Label label={rank} customClass="playerRank" />
      <Avatar label={lastName} subLabel={firstName} initials={position} />
      <Label label={teamAbbr} customClass="teamAbbr" />
    </li>
  );
}

// auction: "67"
// depthChartOrder: null
// esbid: "BAR192674"
// firstName: "Saquon"
// gsisPlayerId: "00-0034844"
// id: "2560968"
// lastName: "Barkley"
// numAdds: 29
// numDrops: 22
// opponentTeamAbbr: "@DAL"
// percentOwned: "100.0"
// percentOwnedChange: false
// percentStarted: "99.4"
// percentStartedChange: "0.1"
// position: "RB"
// rank: "1"
// stock: "even"
// teamAbbr: "NYG"
