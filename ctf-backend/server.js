const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Example problems array with 5 general questions
const problems = [
    {
        "id": 1,
        "title": "Web Login Bypass",
        "description": "There's a simple login page on a website. The page doesn't seem to have proper validation. Can you find a way to bypass the login and retrieve the flag?"
    },
    {
        "id": 2,
        "title": "Caesar Cipher",
        "description": "We have intercepted a message that was encrypted using a Caesar cipher. The message is: 'Uifsf jt b tfdsfu nfttbhf'. Can you decrypt it and find the flag?"
    },
    {
        "id": 3,
        "title": "Simple Crackme",
        "description": "We have a simple executable that asks for a password. Reverse engineer the executable to find the correct password and retrieve the flag."
    },
    {
        "id": 4,
        "title": "Reverse Engineering",
        "description": "Analyze the provided binary file and find out what it does. What is the secret hidden in it?"
    },
    {
        "id": 5,
        "title": "SQL Injection",
        "description": "There's a web application with a vulnerable search feature. Can you exploit it to access the database and find the flag?"
    }
];

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get problems
app.get('/problems', (req, res) => {
    res.json(problems);
});

// Handle login (example endpoint)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Here, you would normally validate the user credentials
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
