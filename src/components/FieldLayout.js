import styles from '../styles/field.module.css';
import {store} from '../redux/store'
const{field}= store.getState();

export const FieldLayout = ({ onClick }) => (
	<div className={styles.container}>
		<div className={styles.field}>
			{field.map((item, index) => (
				<button
					key={index}
					className={styles.field__button}
					onClick={() => onClick(index)}
				>
					{item}
				</button>
			))}
		</div>
	</div>

);
