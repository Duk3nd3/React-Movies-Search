import { useSearchParams } from 'react-router-dom';
import { MoviesGrid } from '../components/MoviesGrid';
import { Searching } from '../components/Searching';
import { useDebounce } from '../hooks/useDebounce';

export function LandingPage() {
	const [query] = useSearchParams();
	const search = query.get('search');

	const debouncedSearch = useDebounce(search, 300);

	return (
		<div>
			<Searching />
			<MoviesGrid key={debouncedSearch} search={debouncedSearch} />
		</div>
	);
}
