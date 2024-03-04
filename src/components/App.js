import { useSelector, useDispatch } from 'react-redux';
import { AppLayout } from './AppLayout';
import { STATUS, PLAYER, WIN_PATTERNS } from '../constants';
import { selectField, selectCurrentPlayer, selectStatus } from '../selectors/index';
import { RESTART_GAME, setCurrentPlayer, setField, setStatus } from '../actions';

const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
	);

const checkEmptyCell = (array) => array.some((item) => item === '');

export const App = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const status = useSelector(selectStatus);
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};
	const handleCellClick = (index) => {
		if (status === STATUS.WIN || status === STATUS.DRAW || field[index] !== '') {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));
		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else  if (checkEmptyCell(newField)) {
			currentPlayer === PLAYER.CROSS
			? dispatch(setCurrentPlayer(PLAYER.ZERO))
			: dispatch(setCurrentPlayer(PLAYER.CROSS));
			} else {
				dispatch(setStatus(STATUS.DRAW));
		}
		console.log(checkEmptyCell(field), currentPlayer);
	};
	return (
		<>
			<AppLayout
				handleRestart={handleRestart}
				handleCellClick={handleCellClick}
			></AppLayout>
		</>
	);
};
