import { useState } from 'react';

export const useUpdateState = () => {
	const [updateState, setUpdateState] = useState(false);

	const updateStateFunc = () => setUpdateState(!updateState);

	return updateStateFunc;
};