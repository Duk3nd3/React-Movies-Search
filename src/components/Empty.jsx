import styles from './Empty.module.css';
import NoResults from '../no_results.png';

export function Empty() {
	return (
		<div className={styles.empty}>
			<p className={styles.emptyText}>No Results</p>
			{<img className={styles.emptyImg} src={NoResults} alt='No Results' />}
		</div>
	);
}
