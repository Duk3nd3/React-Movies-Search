import { RingLoader } from 'react-spinners';
import styles from './IsLoading.module.css';

export function IsLoading() {
	return (
		<div className={styles.isloading}>
			<RingLoader color='#e60073' size={75} />
		</div>
	);
}
