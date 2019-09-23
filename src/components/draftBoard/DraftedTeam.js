import React from 'react';

import DraftedPlayerCard from './DraftedPlayerCard';

export default function DraftedTeam(props) {
  const { players, team } = props;

  return (
    <ul className="player-list">
      {players
        .filter(player => {
          return player.drafted === true && player.draftedTeam === team;
        })
        .map(player => {
          return (
            <>
              <DraftedPlayerCard player={player} />
            </>
          );
        })}
    </ul>
  );
}
