const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

const player = `<video controls>
<source src="/${videoId}" type="video/mp4">
</video>`;

$("#player").append(player);