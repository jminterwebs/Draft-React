import React, { useContext } from 'react';

import { Wrapper } from 'jmdesign';

import PlayerDetails from './PlayerDetails';
import PlayerNotes from './PlayerNotes';
import SelectedPlayerContext from '../../selectedPlayer-context';
import PlayerListContext from '../../player-context';

export default function PlayerInfo() {
  const selectedPlayer = useContext(SelectedPlayerContext) || '';
  const playerList = useContext(PlayerListContext);

  const playerListInfo = playerList.players
    ? playerList.players.find(player => {
        return player.id === selectedPlayer.id;
      })
    : '';

  const expandedPlayerInfo = { ...selectedPlayer, ...playerListInfo };

  return (
    <Wrapper customClass="selected-player-detail">
      <PlayerDetails expandedPlayerInfo={expandedPlayerInfo} />
      <PlayerNotes notes={expandedPlayerInfo.notes} />
    </Wrapper>
  );
}
