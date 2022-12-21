import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IsLoading } from '../components/IsLoading';
import { getMovieImg } from '../utils/getMovieImg';
import { get } from '../utils/httpClient';
import styles from './movieDetalles.module.css';

export function MovieDetails() {
	const { movieId } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		setIsLoading(true);

		get(`/movie/${movieId}`).then((data) => {
			setMovie(data);

			setIsLoading(false);
		});
	}, [movieId]);

	if (isLoading) {
		return <IsLoading />;
	}

	const imageUrl = getMovieImg(movie.poster_path, 500);

	return (
		<div className={styles.cardsgrid}>
			<div className={styles.flipcard}>
				<div className={styles.flipcardinner}>
					<img
						className={`${styles.flipcardfront}`}
						src={imageUrl}
						alt={movie.title}
					/>
					<div className={styles.flipcardback}>
						<strong>Title </strong>
						{movie.title}
						<strong>Genres </strong>
						{movie.genres.map((genre) => genre.name).join(' - ')}
						<strong>Description </strong> {movie.overview}
					</div>
				</div>
			</div>
		</div>
	);
}
