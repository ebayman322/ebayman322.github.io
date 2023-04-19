<!-- ... -->
<section>
    <h2>Featured Prompts</h2>
    <ul id="featured-prompts">
        <!-- Prompts will be added here dynamically -->
    </ul>
</section>

<section>
    <h2>Featured Creations</h2>
    <ul id="featured-creations">
        <!-- Creations will be added here dynamically -->
    </ul>
</section>
<!-- ... -->

// Add this code to your existing "script.js" file

const BROWSE_PROMPTS_API_URL = 'https://your-backend-server.com/api/browse-prompts';

document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is the "Browse Prompts" page
    if (document.querySelector('#prompts-list')) {
        fetchPrompts();
        addFilterListeners();
    }
});

function fetchPrompts() {
    fetch(BROWSE_PROMPTS_API_URL)
        .then(response => response.json())
        .then(prompts => displayPrompts(prompts))
        .catch(error => console.error('Error fetching prompts:', error));
}

function displayPrompts(prompts) {
    const promptsList = document.querySelector('#prompts-list');
    promptsList.innerHTML = '';

    prompts.forEach(prompt => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${prompt.title}</h3>
            <p>${prompt.description}</p>
            <p
