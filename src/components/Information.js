import { STATUS, PLAYER_ACTION } from '../constants';
import { InformationLayout } from './InformationLayout';

export const Information = ({ currentPlayer, status }) => {
	const playerAction = PLAYER_ACTION[status];
	let textInformation =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${currentPlayer}`;
	return <InformationLayout textInformation={textInformation} />;
};
