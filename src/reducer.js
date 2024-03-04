import { initialState } from './initial-state';

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'RESTART_GAME': {
			return {
				...initialState,
			};
		}
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		case 'SET_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_STATUS': {
			return {
				...state,
				status: payload,
			};
		}

		default:
			return state;
	}
};
