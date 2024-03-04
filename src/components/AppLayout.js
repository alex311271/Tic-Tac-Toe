import { Field } from './Field';
import styles from '../styles/app.module.css';
import { Information } from './Information';

export const AppLayout = ({
	handleRestart,
	handleCellClick,
}) => (
	<div className={styles.game}>
		<Information />
		<Field
			handleCellClick={handleCellClick}
		/>
		<button className={styles.button__start} data-id={'reset'} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
