const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
let scores = [
    { team: 'Team A', score: 10 },
    { team: 'Team B', score: 20 }
];

// Login endpoint (for demonstration purposes, this is not secure)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful' });
    } else {
        res.json({ message: 'Invalid username or password' });
    }
});

// Scoreboard endpoint
app.get('/scoreboard', (req, res) => {
    res.json(scores);
});

app.listen(port, () => {
    console.log(`https://ctf-backend-ar9m.onrender.com`);
});
