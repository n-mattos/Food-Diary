// Set up the server
const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
	res.send('This is the home page of the server.');
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});
