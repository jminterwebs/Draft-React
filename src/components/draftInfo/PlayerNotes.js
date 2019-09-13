import React from 'react';

import { VerticalTabs, BodyText } from 'jmdesign';

export default function PlayerNotes(props) {
  const { notes } = props;

  const notesData = notes
    ? notes
        .map(note => {
          return {
            name: note.headline,
            body: (
              <BodyText>
                Summary:
                <br />
                {note.body} <br />
                <br />
                Analysis:
                <br /> {note.analysis}
              </BodyText>
            )
          };
        })
        .slice(0, 5)
    : '';

  return notesData ? (
    <VerticalTabs tabsData={notesData} defaultTabIndex={0} title="Notes" />
  ) : (
    ''
  );
}
