import { Field } from './Field';
import styles from '../styles/app.module.css';
import { Information } from './Information';

export const AppLayout = ({
	handleRestart,
	field,
	currentPlayer,
	setCurrentPlayer,
	status,
	handleCellClick,
}) => (
	<div className={styles.game}>
		<Information currentPlayer={currentPlayer} status={status} />
		<Field
			field={field}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			handleCellClick={handleCellClick}
		/>
		<button className={styles.button__start} data-id={'reset'} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
