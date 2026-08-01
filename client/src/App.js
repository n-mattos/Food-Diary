import logo from './logo.svg';
import axios from 'axios';
import './App.css';

// 'data' is the response from the backend server.
const apiCall = () => {
	axios.get('http://localhost:8080').then((data) => {
		console.log(data);
	})
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Personal Development Project - Food Diary
				</p>
				<p>
					Noah Mattos Oudejans
				</p>

				<button onClick={apiCall}>Make API Call</button>
			</header>
		</div>
	);
}

export default App;
