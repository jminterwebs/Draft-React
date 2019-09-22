import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchAvailablePlayers from './actions/fetchPlayerList';
import fetchPlayerInfo from './actions/fetchPlayer';
import draftPlayer from './actions/draftPlayer';

import DraftInfo from './components/draftInfo/DraftInfo';

import { PlayerListProvider } from './player-context';
import { SelectedPlayerProvider } from './selectedPlayer-context';

class App extends Component {
  constructor() {
    super();

    this.handleSelectPlayer = this.handleSelectPlayer.bind(this);
    this.handleDraftPlayer = this.handleDraftPlayer.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    props.fetchAvailablePlayers();
  }

  handleSelectPlayer = id => {
    const { props } = this;
    props.fetchPlayerInfo(id);
  };

  handleDraftPlayer = id => {
    const { props } = this;

    props.draftPlayer(id);
  };

  render() {
    const { players, selectedPlayer } = this.props;

    return !players.loading ? (
      <PlayerListProvider value={players}>
        <SelectedPlayerProvider value={selectedPlayer}>
          <DraftInfo
            selectPlayer={this.handleSelectPlayer}
            draftPlayer={this.handleDraftPlayer}
          />
        </SelectedPlayerProvider>
      </PlayerListProvider>
    ) : (
      ''
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    selectedPlayer: state.selectedPlayer.player[0]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAvailablePlayers: bindActionCreators(fetchAvailablePlayers, dispatch),
    fetchPlayerInfo: bindActionCreators(fetchPlayerInfo, dispatch),
    draftPlayer: bindActionCreators(draftPlayer, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
