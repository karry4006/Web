const reloadBtn = document.getElementById('reloadBtn');
const loadingVideo = document.getElementById('loadingVideo');
const videoContainer = document.getElementById('videoContainer');
const progressSection = document.getElementById('progressSection');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');

function updateProgressBar(percent) {
    const safePercent = Math.max(0, Math.min(100, percent));
    progressFill.style.width = `${safePercent}%`;
    progressText.textContent = `加載進度：${Math.round(safePercent)}%`;
}

reloadBtn.addEventListener('click', function() {
    reloadBtn.disabled = true;
    updateProgressBar(0);
    progressSection.classList.add('show');
    videoContainer.classList.add('show');
    loadingVideo.play();
});

loadingVideo.addEventListener('ended', function() {
    updateProgressBar(100);
    location.reload();
});

loadingVideo.addEventListener('timeupdate', function() {
    const duration = Number.isFinite(loadingVideo.duration) && loadingVideo.duration > 0
        ? loadingVideo.duration
        : 5;
    const percent = (loadingVideo.currentTime / duration) * 100;
    updateProgressBar(percent);
});