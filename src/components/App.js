import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { AppLayout } from './AppLayout';
import { STATUS, PLAYER, WIN_PATTERNS } from '../constants';
import { selectField, selectCurrentPlayer, selectStatus } from '../selectors/index';
import { RESTART_GAME, setCurrentPlayer, setField, setStatus } from '../actions';

const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
	);

const checkEmptyCell = (array) => array.some((item) => item === '');

export class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.handleRestart = this.handleRestart.bind(this);
		this.handleCellClick = this.handleCellClick.bind(this);
	}
	handleRestart() {
		const { dispatch } = this.props;
		dispatch(RESTART_GAME);
	}
	handleCellClick(index) {
		const { status, currentPlayer, field, dispatch } = this.props;
		if (status === STATUS.WIN || status === STATUS.DRAW || field[index] !== '') {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));
		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			currentPlayer === PLAYER.CROSS
				? dispatch(setCurrentPlayer(PLAYER.ZERO))
				: dispatch(setCurrentPlayer(PLAYER.CROSS));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
		console.log(checkEmptyCell(field), currentPlayer);
	}
	render() {
		return (
			<>
				<AppLayout
					handleRestart={this.handleRestart}
					handleCellClick={this.handleCellClick}
					field={this.props.field}
				></AppLayout>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
	field: selectField(state),
});

export const App = connect(mapStateToProps)(AppContainer);

AppContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
	dispatch: PropTypes.func.isRequired,
};
