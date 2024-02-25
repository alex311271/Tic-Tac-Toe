import { STATUS, PLAYER_ACTION } from '../constants';
import { InformationLayout } from './InformationLayout';
import { store } from '../redux/store';

export const Information = ({ currentPlayer, status }) => {
	// const { currentPlayer, status } = store.getState();
	const playerAction = PLAYER_ACTION[status];
	let textInformation =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${currentPlayer}`;
	return <InformationLayout textInformation={textInformation} />;
};
