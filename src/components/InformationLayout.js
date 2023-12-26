import styles from '../styles/information.module.css';

export const InformationLayout = ({ textInformation }) => (
	<div className={styles.information}>
		<p className={styles.information__text}>{textInformation}</p>
	</div>
);
