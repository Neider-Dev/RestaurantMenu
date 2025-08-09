import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Menu = lazy(() => import('./pages/Menu/Menu.jsx'));

function App() {
	return (
		<Router>
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
