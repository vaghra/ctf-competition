// problems.js

async function fetchProblems() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        alert('You need to log in first');
        window.location.href = 'index.html'; // Redirect to login page
        return [];
    }

    try {
        const response = await fetch('https://ctf-backend-ar9m.onrender.com', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Network response was not ok');
        const problems = await response.json();
        return problems;
    } catch (error) {
        console.error('Failed to fetch problems:', error);
        return [];
    }
}

function createProblemHTML(problem) {
    return `
        <div class="problem">
            <h2>${problem.title}</h2>
            <p>${problem.description}</p>
        </div>
    `;
}

async function renderProblems() {
    const container = document.getElementById('content');
    const problems = await fetchProblems();
    container.innerHTML += problems.map(createProblemHTML).join('');
}

window.onload = renderProblems;
