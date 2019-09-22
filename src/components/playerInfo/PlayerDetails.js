import React from 'react';

import { Label, Title, Badge, Wrapper } from 'jmdesign';
import PlayerDraftButton from './PlayerDraftButton';

export default function PlayerDetails(props) {
  const { expandedPlayerInfo, draftPlayer } = props;

  const statusTag = expandedPlayerInfo.status === 'ACT' ? 'success' : 'danger';

  const bye = expandedPlayerInfo.weeks
    ? expandedPlayerInfo.weeks.find(week => {
        return week.opponent === false;
      }).id
    : '';

  const byeWeek = bye ? (
    <Label label={`Bye: ${bye}`} customClass="player-activity" />
  ) : (
    ''
  );

  const {
    name,
    position,
    rank,
    status,
    percentOwned,
    percentStarted,
    numAdds,
    numDrops
  } = expandedPlayerInfo;

  const playerName = name ? <Title text={name} /> : '';
  const playerPosition = position ? (
    <Label customClass="player-details" label={`Position: ${position}`} />
  ) : (
    ''
  );
  const playerRank = rank ? (
    <Label customClass="player-details" label={`Rank: ${rank}`} />
  ) : (
    ''
  );

  const playerPercentOwned = percentOwned ? (
    <Label label={`Owned: ${percentOwned}%`} />
  ) : (
    ''
  );
  const playerPercentStarted = percentStarted ? (
    <Label label={`Started: ${percentStarted}%`} />
  ) : (
    ''
  );
  const playerNumAdds = numAdds ? <Label label={`Adds: ${numAdds}`} /> : '';
  const playerNumDrops = numDrops ? <Label label={`Drops: ${numDrops}`} /> : '';

  const playerStatus = status || '';
  const statusBadge = status ? (
    <Badge type={statusTag} size="small" label={playerStatus} />
  ) : (
    ''
  );

  const playerDrafted = status ? (
    <PlayerDraftButton
      draftPlayer={draftPlayer}
      playerId={expandedPlayerInfo.id}
    />
  ) : (
    ''
  );

  return (
    <Wrapper customClass="basic-player-info">
      {playerName}
      <Wrapper customClass="details">
        {playerPosition}
        {playerRank}
      </Wrapper>
      <Wrapper customClass="player-status">
        <Wrapper customClass="player-activity">{statusBadge}</Wrapper>
        {byeWeek}
      </Wrapper>
      <Wrapper customClass="player-ownership">
        <Wrapper customClass="player-ownership-stat">
          {playerPercentOwned}
          {playerPercentStarted}
        </Wrapper>
        <Wrapper customClass="player-ownership-stat">
          {playerNumAdds}
          {playerNumDrops}
        </Wrapper>
      </Wrapper>
      {playerDrafted}
    </Wrapper>
  );
}

// {
//   "id": "483271",
//   "timestamp": "2019-08-22 11:43:39",
//   "source": "NFL",
//   "headline": "Held out again",
//   "body": "Barkley won't play in Thursday's preseason game against the Bengals, Ralph Vacchiano of SportsNet New York reports.",
//   "analysis": "Barkley has been healthy throughout the offseason program and training camp, logging plenty of time on the practice field. His absence Thursday leaves more work for the players competing to be his backup -- Wayne Gallman, Paul Perkins and Rod Smith."
// },

// auction: "67"
// depthChartOrder: null
// esbid: "BAR192674"
// firstName: "Saquon"
// gsisPlayerId: "00-0034844"
// id: "2558019"
// injuryGameStatus: null
// jerseyNumber: "41"
// lastName: "Barkley"
// name: "Alvin Kamara"
// notes: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// numAdds: 24
// numDrops: 24
// opponentTeamAbbr: "@DAL"
// percentOwned: "100.0"
// percentOwnedChange: false
// percentStarted: "99.4"
// percentStartedChange: false
// position: "RB"
// rank: "1"
// status: "ACT"
// stock: "even"
// teamAbbr: "NYG"
// videos: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// weeks: (17) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// __proto__: Object
