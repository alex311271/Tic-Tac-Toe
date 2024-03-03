import { STATUS, PLAYER } from '../constants';

export const initialState = {
	status: STATUS.TURN,
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: PLAYER.CROSS,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_PLAY_DATA': {
			return payload;
		}
		case 'SET_STATUS': {
			return {
				...state,
				status: payload,
			};
		}
		case 'SET_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		default:
			return state;
	}
};
