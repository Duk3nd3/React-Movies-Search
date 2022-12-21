import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import styles from './Searching.module.css';

export function Searching() {
	const [query, setQuery] = useSearchParams();
	const search = query.get('search');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={styles.searchContainer} onSubmit={handleSubmit}>
			<div className={styles.searchBox}>
				<input
					className={styles.searchInput}
					type='text'
					value={search ?? ''}
					placeholder='Title'
					aria-label='Search Movies'
					onChange={(e) => {
						const value = e.target.value;

						setQuery(value ? { search: value } : {});
					}}
				/>
				<FaSearch size={20} className={styles.searchButton} />
			</div>
		</form>
	);
}
