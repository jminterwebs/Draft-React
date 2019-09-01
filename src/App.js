import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchAvailablePlayers from './actions/fetchPlayerList';

import PlayerList from './components/playerList/PlayerList';

import { PlayerListProvider } from './player-context';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchAvailablePlayers();
  }

  render() {
    const { players } = this.props;

    return !players.loading ? (
      <PlayerListProvider value={players}>
        <PlayerList />
      </PlayerListProvider>
    ) : (
      ''
    );
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAvailablePlayers: bindActionCreators(fetchAvailablePlayers, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
