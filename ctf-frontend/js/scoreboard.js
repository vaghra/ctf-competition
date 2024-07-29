function createBubble(score) {
    const bubble = document.createElement('div');
    bubble.className = 'score-bubble';
    bubble.style.width = bubble.style.height = `${score * 2}px`; // Adjust size as needed
    bubble.textContent = score;
    return bubble;
}

function renderScoreboard() {
    fetch('https://ctf-backend-ar9m.onrender.com')
    .then(response => response.json())
    .then(scores => {
        const scoreboard = document.getElementById('scoreboard');
        scores.forEach(team => {
            const teamContainer = document.createElement('div');
            teamContainer.className = 'team-container';

            const teamName = document.createElement('span');
            teamName.className = 'team-name';
            teamName.textContent = team.team;

            const teamScore = createBubble(team.score);

            teamContainer.appendChild(teamName);
            teamContainer.appendChild(teamScore);
            scoreboard.appendChild(teamContainer);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

renderScoreboard();
