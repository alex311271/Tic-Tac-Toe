import { FieldLayout } from './FieldLayout';

export const Field = ({ field, handleCellClick }) => {
	return <FieldLayout onClick={handleCellClick} field={field} />;
};
