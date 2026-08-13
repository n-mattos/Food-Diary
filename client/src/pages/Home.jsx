import axios from 'axios';
import logo from '../logo.svg';
import './pages.css';

// 'data' is the response from the backend server.
const apiCall = () => {
	axios.get('http://localhost:8080').then((data) => {
		console.log(data);
	});
};

export default function Home() {
	return (
		<>
			<header className="Home-page">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Personal Development Project - Food Diary</p>
				<p>Noah Mattos Oudejans</p>

				<div style={{padding:16}}>
					<button onClick={apiCall}>Make API Call</button>
				</div>
			</header>
		</>
	);
}
