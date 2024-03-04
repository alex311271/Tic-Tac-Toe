import {STATUS, PLAYER} from './constants'

export const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: PLAYER.CROSS,
	status: STATUS.TURN
};