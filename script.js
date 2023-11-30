// script.js

function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectIframe');
    const projectUrls = {
        'project1': 'https://ren-atomo.github.io/brock.github.io/',
        'project2': 'https://ren-atomo.github.io/marker',
        'project3': 'https://ren-atomo.github.io/maru/',
        'project4': 'https://ren-atomo.github.io/commingsoon',
       // 'project5': 'https://ren-atomo.github.io/commingsoon',
       // 'project6': 'https://ren-atomo.github.io/commingsoon',
    };

    iframe.src = projectUrls[projectId];
    modal.style.display = 'block';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectIframe');

    iframe.src = '';
    modal.style.display = 'none';
}
