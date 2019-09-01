import React from 'react';

import { Avatar, Label } from 'jmdesign';

import './playerList.scss';

export default function PlayerList(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, firstName, lastName, rank, teamAbbr, position } = props.player;

  return (
    <li key={id} className={`player-item ${position}`}>
      <Label label={rank} customClass="playerRank" />
      <Avatar label={lastName} subLabel={firstName} initials={position} />
      <Label label={teamAbbr} customClass="teamAbbr" />
    </li>
  );
}
