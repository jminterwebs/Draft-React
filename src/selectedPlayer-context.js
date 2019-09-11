import React from 'react';

const SelectedPlayerContext = React.createContext({});

export const SelectedPlayerProvider = SelectedPlayerContext.Provider;
export const SelectedPlayerConsumer = SelectedPlayerContext.Consumer;

export default SelectedPlayerContext;
