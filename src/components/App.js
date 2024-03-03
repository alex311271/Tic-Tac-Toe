import { AppLayout } from './AppLayout';
import { STATUS, PLAYER, WIN_PATTERNS } from '../constants';
import { store } from '../redux/store';
import { initialState } from '../redux/app-reducer';
import { useUpdateState } from '../use-update-state';
// import { useEffect } from 'react';

const checkWin = (array, item) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => array[cellIndex] === item),
	);

const checkEmptyCell = (array) => array.some((item) => item === '');

export const App = () => {
	const updateStateFunc = useUpdateState();

	const handleRestart = () => {
		updateStateFunc();
		store.dispatch({ type: 'SET_PLAY_DATA', payload: initialState });
	};
	const handleCellClick = (index) => {
		updateStateFunc();
		const { status, field, currentPlayer } = store.getState();
		if (status === STATUS.WIN || status === STATUS.DRAW || field[index] !== '') {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWin(newField, currentPlayer)) {
			store.dispatch({ type: 'SET_STATUS', payload: STATUS.WIN });
		} else if (checkEmptyCell(newField)) {
			currentPlayer === PLAYER.CROSS
				? store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: PLAYER.ZERO })
				: store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: PLAYER.CROSS });
		} else {
			store.dispatch({ type: 'SET_STATUS', payload: STATUS.DRAW });
		}
	};

	return (
		<>
			<AppLayout handleRestart={handleRestart} handleCellClick={handleCellClick} />
		</>
	);
};
