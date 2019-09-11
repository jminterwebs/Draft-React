import React from 'react';

import AvailablePlayers from './AvailablePlayers';

import './draftInfo.scss';
import PlayerInfo from './PlayerInfo';

export default function DraftInfo(props) {
  const { selectPlayer } = props;

  return (
    <div className="draft-info">
      <AvailablePlayers selectedPlayer={selectPlayer} />
      <PlayerInfo />
    </div>
  );
}
