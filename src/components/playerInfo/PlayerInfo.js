import React, { useContext } from 'react';

import { Wrapper } from 'jmdesign';

import PlayerDetails from './PlayerDetails';
import PlayerNotes from './PlayerNotes';
import SelectedPlayerContext from '../../selectedPlayer-context';
import PlayerListContext from '../../player-context';

export default function PlayerInfo(props) {
  const selectedPlayer = useContext(SelectedPlayerContext) || '';
  const playerList = useContext(PlayerListContext);

  const playerListInfo = playerList.players
    ? playerList.players.find(player => {
        return player.id === selectedPlayer.id;
      })
    : '';

  const { draftPlayer } = props;

  const expandedPlayerInfo = { ...selectedPlayer, ...playerListInfo };

  const playerDetails = expandedPlayerInfo.drafted ? (
    ''
  ) : (
    <>
      <PlayerDetails
        expandedPlayerInfo={expandedPlayerInfo}
        draftPlayer={draftPlayer}
      />
      <PlayerNotes notes={expandedPlayerInfo.notes} />
    </>
  );

  return (
    <Wrapper customClass="selected-player-detail">{playerDetails}</Wrapper>
  );
}
