
export const initialState = {};

export const appReducer = (state=initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD': {
			return payload;
		}
		case 'SET_CURRENT_PLAYER': {
			return payload;
		}
		case 'SET_STATUS': {
			return payload;
		}
		default:
			return state;
	}
};
