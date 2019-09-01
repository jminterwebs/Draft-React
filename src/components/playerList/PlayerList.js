import React, { useContext } from 'react';

import PlayerItem from './PlayerItem';

import PlayerListContext from '../../player-context';

export default function PlayerList() {
  const playerList = useContext(PlayerListContext);

  const { players } = playerList;

  return (
    <>
      {players.map(player => {
        return <PlayerItem player={player} />;
      })}
    </>
  );
}
