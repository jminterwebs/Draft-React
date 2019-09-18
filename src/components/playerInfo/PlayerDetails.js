import React from 'react';

import { Label, Title, Badge, Wrapper } from 'jmdesign';

export default function PlayerDetails(props) {
  const { expandedPlayerInfo } = props;

  const status = expandedPlayerInfo.status === 'ACT' ? 'success' : 'danger';

  const byeWeek = expandedPlayerInfo.weeks
    ? expandedPlayerInfo.weeks.find(week => {
        return week.opponent === false;
      }).id
    : '';

  return (
    <Wrapper customClass="basic-player-info">
      <Title text={expandedPlayerInfo.name} />

      <Wrapper customClass="details">
        <Label
          customClass="player-details"
          label={`Position: ${expandedPlayerInfo.position}`}
        />
        <Label
          customClass="player-details"
          label={`Rank: ${expandedPlayerInfo.rank}`}
        />
      </Wrapper>

      <Wrapper customClass="player-status">
        <Wrapper customClass="player-activity">
          <Badge type={status} size="small" label={expandedPlayerInfo.status} />
        </Wrapper>
        <Label label={`Bye: ${byeWeek}`} customClass="player-activity" />
      </Wrapper>

      <Wrapper customClass="player-ownership">
        <Wrapper customClass="player-ownership-stat">
          <Label label={`Owned: ${expandedPlayerInfo.percentOwned}%`} />
          <Label label={`Started: ${expandedPlayerInfo.percentStarted}%`} />
        </Wrapper>
        <Wrapper customClass="player-ownership-stat">
          <Label label={`Adds: ${expandedPlayerInfo.numAdds}%`} />
          <Label label={`Drops: ${expandedPlayerInfo.numDrops}%`} />
        </Wrapper>
      </Wrapper>
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
