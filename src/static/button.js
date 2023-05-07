// Get all the "Add to Playlist" buttons
const addToPlaylistButtons = document.querySelectorAll('.add-to-playlist');

// Attach a click event listener to each button
addToPlaylistButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the parent div containing the song details
    const songItem = button.closest('.song-item');

    // Get the song details
    const imgSrc = songItem.querySelector('img').src;
    const songName = songItem.querySelector('h2').textContent;
    const duration = songItem.querySelector('p').textContent;

    // Display the song details (you can modify this part to suit your needs)
    console.log('Image Source:', imgSrc);
    console.log('Song Name:', songName);
    console.log('Duration:', duration);
  });
});
