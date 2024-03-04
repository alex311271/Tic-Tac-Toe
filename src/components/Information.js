import { useSelector } from 'react-redux';
import { STATUS, PLAYER_ACTION } from '../constants';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlayer, selectStatus } from '../selectors/index';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const status = useSelector(selectStatus);
	const playerAction = PLAYER_ACTION[status];
	let textInformation =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${currentPlayer}`;
	return <InformationLayout textInformation={textInformation} />;
};
