const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ctf', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const scoreSchema = new mongoose.Schema({
    team: String,
    score: Number
});

const User = mongoose.model('User', userSchema);
const Score = mongoose.model('Score', scoreSchema);

// Authentication endpoints
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save(err => {
        if (err) {
            res.status(500).send('Error registering new user.');
        } else {
            res.status(200).send('User registered.');
        }
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
        if (err || !user) {
            res.status(401).send('Invalid username or password.');
        } else {
            res.status(200).send('Login successful.');
        }
    });
});

// Scoreboard endpoint
app.get('/scoreboard', (req, res) => {
    Score.find({}, (err, scores) => {
        if (err) {
            res.status(500).send('Error retrieving scores.');
        } else {
            res.status(200).json(scores);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
