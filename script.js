// JavaScript logic for video loading and navigation

// Function to load a video
function loadVideo(videoId) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `<iframe src='https://www.youtube.com/embed/${videoId}' frameborder='0' allowfullscreen></iframe>`;
}

// Function to navigate to next video
function nextVideo(currentVideoIndex, videoList) {
    const nextIndex = (currentVideoIndex + 1) % videoList.length;
    loadVideo(videoList[nextIndex]);
}

// Function to navigate to previous video
function previousVideo(currentVideoIndex, videoList) {
    const prevIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length;
    loadVideo(videoList[prevIndex]);
}

// Sample video list
const videos = ['dQw4w9WgXcQ', '3fumBcK-88Y', 'OPf0Y6Fq1Xc'];

// Initialize with the first video
loadVideo(videos[0]);