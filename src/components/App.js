import { AppLayout } from './AppLayout';
import { useState } from 'react';
import { STATUS, PLAYER, WIN_PATTERNS } from '../constants';

const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
	);

const checkEmptyCell = (field) => field.some((cell) => cell === '');

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [status, setStatus] = useState(STATUS.TURN);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleRestart = () => {
		setCurrentPlayer(PLAYER.CROSS);
		setStatus(STATUS.TURN);
		setField(['', '', '', '', '', '', '', '', '']);
	};
	const handleCellClick = (index) => {
		if (status === STATUS.WIN || status === STATUS.DRAW || field[index] !== '') {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		if (checkWin(newField, currentPlayer)) {
			setStatus(STATUS.WIN);
		} else if (checkEmptyCell(newField)) {
			setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS);
		} else {
			setStatus(STATUS.DRAW);
		}
	};
	return (
		<>
			<AppLayout
				handleRestart={handleRestart}
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				status={status}
				handleCellClick={handleCellClick}
			></AppLayout>
		</>
	);
};
