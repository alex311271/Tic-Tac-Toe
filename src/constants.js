export const STATUS = {
	TURN: 0,
	WIN: 1,
	DRAW: 2,
};

export const PLAYER_ACTION = {
	[STATUS.TURN]: 'Ходит',
	[STATUS.WIN]: 'Победил',
};

export const PLAYER = {
	CROSS:'X',
	ZERO:'O'
}

export const WIN_PATTERNS = [
	// Варианты побед по горизонтали
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// Варианты побед по вертикали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	// Варианты побед по диагонали
	[0, 4, 8],
	[2, 4, 6],
];
