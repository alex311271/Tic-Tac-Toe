import styles from '../styles/field.module.css';

export const FieldLayout = ({ field, onClick }) => (
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
