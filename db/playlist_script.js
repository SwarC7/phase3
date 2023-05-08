function add() {
    var button = event.target; // Get the clicked button
    var parentDiv = button.parentNode; // Get the parent div

    // Retrieve the relevant elements from the parent div
    var img = parentDiv.querySelector('img');
    var title = parentDiv.querySelector('h2');
    var duration = parentDiv.querySelector('p');

    // Construct the song object with the required details
    var song = {
        img: img.src,
        song: title.textContent,
        time: duration.textContent
    };

    console.log(song);

    // Make an HTTP request to the API endpoint
    fetch('http://127.0.0.1:5000/song', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
    })
        .then(response => {
            if (response.ok) {
                console.log('Song details sent to the API successfully.');
            } else {
                x
                console.error('Failed to send song details to the API.');
            }
        })
        .catch(error => {
            console.error('An error occurred while sending the song details to the API:', error);
        });
}


function fet() {
    fetch('http://127.0.0.1:5000/song')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            display(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function display(data) {

    let listdiv = document.getElementById('list');

    data.forEach(element => {

        var itemElement = document.createElement('div');
        itemElement.classList.add('pshi');

        const { id, img, song, time } = element;
        const itemText = `<a>${img}Song: ${song}, Time: ${time}</a>`;

        var im = document.createElement('img');
        im.classList.add('result-item-image');
        // console.log(img);
        im.src = img;
        // listdiv.appendChild(im);

        const buttn = `<div class="insdiv">
                            <img src="${img}" class='resulimg'>
                            <h2>${song}</h2>
                            <p>${time}</p>
                            <button class="add-to-playlist" onclick="getSongAndTime()">Remove</button>
                        </div>`;

        

        itemElement.innerHTML = itemText;

        // listdiv.appendChild(itemElement);
        
        console.log(data)

        itemElement.innerHTML = buttn;

        listdiv.appendChild(itemElement);

        // listdiv.innerHTML=itemText;
    });
}


function handleRequest(request) {
    if (request.method === 'GET') {
      fet();
      console.log('GET request received');
    } else if (request.method === 'POST') {
      // Perform the desired function for POST requests
      // Add your code here
      console.log('POST request received');
    } else {
      // Perform the desired function for other request types
      // Add your code here
      console.log('Request received');
    }
  }
  
  // Example usage
  var request = {
    method: 'GET',
    // Other request properties...
  };

handleRequest(request);
  
function getSongAndTime() {
    var button = event.target; // Get the clicked button
    var parentDiv = button.parentNode;
    var songElement = parentDiv.querySelector('h2');
    var timeElement = parentDiv.querySelector('p');
    
    var song = songElement.textContent;
    var time = timeElement.textContent;
    
    var songTime = song + time;
    console.log(songTime);
    songTime=songTime.replace("?", "");
    removeFromPlaylist(songTime);
    return songTime;
  }


function removeFromPlaylist(name) {
    const url = `http://127.0.0.1:5000/delete/${name}`;

    fetch(url, {
        method: 'DELETE'
    })
        .then(response => {
        if (response.ok) {
            console.log('Song removed from the playlist successfully.');
            // Optionally, you can remove the corresponding HTML element from the page
            const divToRemove = document.getElementById(name);
            if (divToRemove) {
            divToRemove.remove();
            }
        } else {
            console.error('Failed to remove song from the playlist.');
        }
        })
        .catch(error => {
        console.error('An error occurred while removing the song from the playlist:', error);
        });
}

// fet();