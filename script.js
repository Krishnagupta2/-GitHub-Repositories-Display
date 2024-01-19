document.addEventListener('DOMContentLoaded', function () {
    const username = 'himanshu007-creator';
    const repositoriesContainer = document.getElementById('repositories');
    const loader = document.getElementById('loader');
    const paginationContainer = document.getElementById('pagination');
    const perPageOptions = [10, 25, 50, 100];
    let currentPage = 1;
    let repositoriesPerPage = 10;

    
    const pageInfoContainer = document.createElement('p');
    pageInfoContainer.classList.add('page-info');
    const parentContainer = repositoriesContainer.parentElement;
    parentContainer.appendChild(pageInfoContainer);

    function showLoader() {
        loader.classList.remove('hidden');
    }

    function hideLoader() {
        loader.classList.add('hidden');
    }

    function displayRepositories(repositories) {
        repositoriesContainer.innerHTML = '';

        repositories.forEach(repository => {
            const repositoryCard = document.createElement('div');
            repositoryCard.classList.add('repository-card');

            repositoryCard.innerHTML = `
                <h3>${repository.name}</h3>
                <p>${repository.description || 'No description available'}</p>
                <p>Topics: ${repository.topics.join(', ')}</p>
                <p>Language: ${repository.language || 'Not specified'}</p>
                <a href="${repository.html_url}" target="_blank">View on GitHub</a>
            `;

            repositoriesContainer.appendChild(repositoryCard);
        });

       
        repositoriesContainer.appendChild(loader);
    }

    function displayPagination(totalPages) {
        
        paginationContainer.innerHTML = '';

       
        pageInfoContainer.textContent = ` Repositories per page: ${repositoriesPerPage}`;

        
        paginationContainer.classList.add('hidden');
    }

    function fetchRepositories() {
        showLoader();

        const apiUrl = `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${repositoriesPerPage}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const linkHeader = response.headers.get('Link');
                return Promise.all([response.json(), linkHeader]);
            })
            .then(([repositories, linkHeader]) => {
                hideLoader();
                
                displayRepositories(repositories);
                
                const totalPages = linkHeader ? extractTotalPages(linkHeader) : 1;
                displayPagination(totalPages);
            })
            .catch(error => {
                hideLoader();
                console.error('Error fetching repositories:', error);
            });
    }

    function extractTotalPages(linkHeader) {
        const matches = linkHeader.match(/&page=(\d+)>; rel="last"/);
        return matches ? parseInt(matches[1], 10) : 1;
    }

    function updatePerPage(value) {
        repositoriesPerPage = value;
        currentPage = 1;
        fetchRepositories();
    }

    
    const perPageSelect = document.createElement('select');
    perPageOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = `${option}/100`; 
        perPageSelect.appendChild(optionElement);
    });
    perPageSelect.addEventListener('change', (event) => {
        updatePerPage(parseInt(event.target.value, 10));
    });

    parentContainer.appendChild(perPageSelect);
    perPageSelect.style.margin = '0 50%'; 

    
    fetchRepositories();
}); 