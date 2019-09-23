import React from 'react';

import { Avatar } from 'jmdesign';

export default function DraftedPlayerCard(props) {
  const { player } = props;
  const { id, firstName, lastName, position } = player;

  return (
    <li key={id} className={`player-item ${position}`}>
      <Avatar label={lastName} subLabel={firstName} initials={position} />
    </li>
  );
}
