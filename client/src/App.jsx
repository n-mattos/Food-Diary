import Header from './components/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Diary from './pages/Diary';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/diary" element={<Diary />} />
			</Routes>
		</div>
	);
}

export default App;
