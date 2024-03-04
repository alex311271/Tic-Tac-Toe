
import { FieldLayout } from './FieldLayout';
import { selectField } from '../selectors/index';
import { useSelector } from 'react-redux';

export const Field = ({ handleCellClick }) => {
	const field = useSelector(selectField);
	return <FieldLayout onClick={handleCellClick} field={field} />;
};
