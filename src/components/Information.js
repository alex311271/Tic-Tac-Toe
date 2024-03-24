import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { STATUS, PLAYER_ACTION, PLAYER } from '../constants';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlayer, selectStatus } from '../selectors/index';
import { Component } from 'react';

export class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;
		const playerAction = PLAYER_ACTION[status];
		let textInformation =
			status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${currentPlayer}`;
		return <InformationLayout textInformation={textInformation} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);

InformationContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
};
