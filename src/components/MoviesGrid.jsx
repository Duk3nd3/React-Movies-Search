import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { get } from '../utils/httpClient';
import { IsLoading } from './IsLoading';
import { Empty } from './Empty';
import styles from './MoviesGrid.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid({ search }) {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		const searchUrl = search
			? `/search/movie?query=${search}&page=${page}`
			: `/discover/movie?page=${page}`;
		get(searchUrl).then((data) => {
			setMovies((prevMovies) => prevMovies.concat(data.results));
			setHasMore(data.page < data.total_pages);
		});
	}, [search, page]);

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={() => setPage((prevPage) => prevPage + 1)}
			loader={<IsLoading />}
			endMessage={
				movies.length === 0 ? (
					<Empty />
				) : (
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				)
			}
		>
			<ul className={styles.moviesGrid}>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</ul>
		</InfiniteScroll>
	);
}
