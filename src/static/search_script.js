
function keyclick(event){
    if(event.keyCode==13){
        document.getElementById("clickbutton").click();
    }
}

function find(){
    var searchTerm = document.getElementById('bigsearch').value;
    var url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(searchTerm) + '&entity=song';
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayResults(data.results);
        console.log(data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  function displayResults(results) {
    var container = document.createElement('div');
    container.classList.add('results-container');
    // let dur=1000*1000;
    var dur=document.getElementById("minrange").value;

    if(dur.length === 0){
        dur=100;
    }

    var con=0;
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      if (con == 10) {
        break;
      }
      console.log(document.getElementById("turnfilter").checked);
      if(document.getElementById("turnfilter").checked){
    
        if(dur*60>=result.trackTimeMillis/1000){
            // console.log(document.getElementById("turnfilter").checked);

            if((document.getElementById("checkexp").checked) && (result.trackExplicitness==="explicit")){
            
                con=con+1;
                var item = document.createElement('div');
                item.classList.add('result-item');
                
                var img = document.createElement('img');
                img.classList.add('result-item-image');
                img.src = result.artworkUrl100;
                item.appendChild(img);
                
                var name = document.createElement('p');
                name.classList.add('result-item-name');
                name.textContent = result.trackName;
                item.appendChild(name);
                
                var artist = document.createElement('p');
                artist.classList.add('result-item-artist');
                artist.textContent = result.artistName;
                item.appendChild(artist);

                var audio = document.createElement('audio');
                audio.controls = true;
                audio.classList.add('result-item-audio');
                audio.src = result.previewUrl.replace('30x30', '200x200');
                item.appendChild(audio);
                
                
                container.appendChild(item);
            }
            else if((!(document.getElementById("checkexp").checked))&&result.trackExplicitness!=="explicit"){
                con=con+1;
                var item = document.createElement('div');
                item.classList.add('result-item');
                
                var img = document.createElement('img');
                img.classList.add('result-item-image');
                img.src = result.artworkUrl100;
                item.appendChild(img);
                
                var name = document.createElement('p');
                name.classList.add('result-item-name');
                name.textContent = result.trackName;
                item.appendChild(name);
                
                var artist = document.createElement('p');
                artist.classList.add('result-item-artist');
                artist.textContent = result.artistName;
                item.appendChild(artist);

                var audio = document.createElement('audio');
                audio.controls = true;
                audio.classList.add('result-item-audio');
                audio.src = result.previewUrl.replace('30x30', '200x200');
                item.appendChild(audio);
                
                
                container.appendChild(item);
                
                }
                }
            }
            else{
                con=con+1;
                var item = document.createElement('div');
                item.classList.add('result-item');
                
                var img = document.createElement('img');
                img.classList.add('result-item-image');
                img.src = result.artworkUrl100;
                item.appendChild(img);
                
                var name = document.createElement('p');
                name.classList.add('result-item-name');
                name.textContent = result.trackName;
                item.appendChild(name);
                
                var artist = document.createElement('p');
                artist.classList.add('result-item-artist');
                artist.textContent = result.artistName;
                item.appendChild(artist);

                var audio = document.createElement('audio');
                audio.controls = true;
                audio.classList.add('result-item-audio');
                audio.src = result.previewUrl.replace('30x30', '200x200');
                item.appendChild(audio);
                
                
                container.appendChild(item);
                
                }
        }
        
    var print = document.getElementById('print');
    print.innerHTML = '';
    print.appendChild(container);
  }
  

  
