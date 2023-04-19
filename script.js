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



// Add this code to your existing "script.js" file

const GALLERY_API_URL = 'https://your-backend-server.com/api/gallery';

document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is the "Gallery" page
    if (document.querySelector('#gallery-grid')) {
        fetchGalleryCreations();
    }
});

function fetchGalleryCreations() {
    fetch(GALLERY_API_URL)
        .then(response => response.json())
        .then(creations => displayGalleryCreations(creations))
        .catch(error => console.error('Error fetching gallery creations:', error));
}

function displayGalleryCreations(creations) {
    const galleryGrid = document.querySelector('#gallery-grid');

    creations.forEach(creation => {
        const galleryItem = document.createElement('div// Add this code to your existing "script.js" file

function displayGalleryCreations(creations) {
    const galleryGrid = document.querySelector('#gallery-grid');

    creations.forEach(creation => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = creation.imageUrl;
        img.alt = creation.title;

        const title = document.createElement('h3');
        title.textContent = creation.title;

        const author = document.createElement('p');
        author.textContent = `Created by: ${creation.author}`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        galleryItem.appendChild(author);

        galleryGrid.appendChild(galleryItem);
    });
}

// Add this code to your existing "script.js" file

const TUTORIALS_WORKSHOPS_API_URL = 'https://your-backend-server.com/api/tutorials-workshops';

document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is the "Tutorials & Workshops" page
    if (document.querySelector('#tutorials-workshops-list')) {
        fetchTutorialsWorkshops();
    }
});

function fetchTutorialsWorkshops() {
    fetch(TUTORIALS_WORKSHOPS_API_URL)
        .then(response => response.json())
        .then(items => displayTutorialsWorkshops(items))
        .catch(error => console.error('Error fetching tutorials and workshops:', error));
}

function displayTutorialsWorkshops(items) {
    const tutorialsWorkshopsList = document.querySelector('#tutorials-workshops-list');

    items.forEach(item => {
        const listItem = document.createElement('li');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = 'View Tutorial/Workshop';
        link.target = '_blank';

        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(link);

        tutorialsWorkshopsList.appendChild(listItem);
    });
}
