import React, { useContext } from 'react';

import PlayerListContext from '../../player-context';
import DraftedTeam from './DraftedTeam';

import './draftboard.scss';

export default function DraftBoard() {
  const playerList = useContext(PlayerListContext);

  const { players } = playerList;

  return (
    <div className="drafted-board">
      <DraftedTeam players={players} team={1} />
      <DraftedTeam players={players} team={2} />
      <DraftedTeam players={players} team={3} />
      <DraftedTeam players={players} team={4} />
      <DraftedTeam players={players} team={5} />
      <DraftedTeam players={players} team={6} />
      <DraftedTeam players={players} team={7} />
      <DraftedTeam players={players} team={8} />
      <DraftedTeam players={players} team={9} />
      <DraftedTeam players={players} team={10} />
    </div>
  );
}
