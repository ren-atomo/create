// main.js

function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectIframe');

    // ここで各プロジェクトに対応するURLを指定
    const projectUrls = {
        'project1': 'https://example.com/project1',
        'project2': 'https://example.com/project2',
    };

    iframe.src = projectUrls[projectId];
    modal.style.display = 'block';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectIframe');

    iframe.src = ''; // iframeのURLをクリアしておく
    modal.style.display = 'none';
}
