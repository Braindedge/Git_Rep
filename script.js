document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('yesButton').addEventListener('click', function() {
        replaceContentWithLoveMessage('tenor.gif', 'YES vocal.wav');
    });

    document.getElementById('noButton').addEventListener('click', function() {
        showImageAndText('X.png', 'NO vocal.wav');
    });
});

function replaceContentWithLoveMessage(imagePath, audioPath) {
    var content = document.getElementById('content');
    var audioPlayer = document.getElementById('audioPlayer');

    // Update the content with new image and show love text
    content.innerHTML = '<img src="' + imagePath + '" alt="Love Image" id="photoX">' +
                        '<p id="loveText" style="display:block; color: red; font-size: 2em; margin-top: 20px;">I looooooooooooooooooooooooooove you <3 <3 <3</p>';

    audioPlayer.src = audioPath;
    audioPlayer.play();
}

function showImageAndText(imagePath, audioPath) {
    var resultImage = document.getElementById('resultImage');
    var overlay = document.getElementById('overlay');
    var tryAgainText = document.getElementById('tryAgain');
    var audioPlayer = document.getElementById('audioPlayer');

    resultImage.src = imagePath;
    overlay.style.display = 'flex';
    tryAgainText.style.display = 'block';
    overlay.style.animation = 'none'; // Reset animation
    setTimeout(function() { overlay.style.animation = 'fadeOut 3s forwards'; }, 100); // Restart animation

    audioPlayer.src = audioPath;
    audioPlayer.play();
}
