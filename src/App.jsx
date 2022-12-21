import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	Navigate,
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';
import styles from './App.module.css';

export function App() {
	return (
		<Router>
			<header>
				<Link to='/'>
					<h1 className={styles.title}>Movies</h1>
				</Link>
			</header>
			<main>
				<Routes>
					<Route path='/movies/:movieId' element={<MovieDetails />} />
					<Route path='/' element={<LandingPage />} />
					<Route path='*' element={<Navigate replace to='/' />}></Route>
				</Routes>
			</main>
		</Router>
	);
}
