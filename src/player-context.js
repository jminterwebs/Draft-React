import React from 'react';

const PlayerListContext = React.createContext({});

export const PlayerListProvider = PlayerListContext.Provider;
export const PlayerListConsumer = PlayerListContext.Consumer;
export default PlayerListContext;
