/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { Title } from 'jmdesign';

import './playerinfo.scss';

export default function PlayerDraftButton(props) {
  const { playerId } = props;

  return (
    <div className="draft-button" onClick={() => props.draftPlayer(playerId)}>
      <Title text="Draft" />
    </div>
  );
}
