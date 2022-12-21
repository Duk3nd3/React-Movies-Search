import withoutImage from '../without_image.jpg';

export function getMovieImg(path, width) {
	return path ? `https://image.tmdb.org/t/p/w${width}${path}` : withoutImage;
}
