import React from 'react';
import PlayerList from '../playerList/PlayerList';

export default function AvailablePlayers(props) {
  const { selectedPlayer } = props;

  return (
    <div className="draftable-list">
      <PlayerList selectedPlayer={selectedPlayer} />
    </div>
  );
}
