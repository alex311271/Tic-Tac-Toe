import { FieldLayout } from './FieldLayout';
import { store } from '../redux/store';

export const Field = ({ handleCellClick }) => {
	const { field } = store.getState();

	return <FieldLayout onClick={handleCellClick} field={field} />;
};
