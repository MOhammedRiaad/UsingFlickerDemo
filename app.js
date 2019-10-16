
let ApiKey = '07a51e8df87139cf192c84e07c215659';
let secret = '';
let divImages = document.getElementById('demo');
var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${ApiKey}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`,
    "method": "GET",
    "headers": {}
  }

  fetch(settings.url).then(result => result.json()).then(respone =>  respone.photos.photo.forEach(element => {
      console.log(element)
      var x = document.createElement("IMG");
    x.setAttribute("src", `https://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg `);
    x.setAttribute("width", "304");
     x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    divImages.appendChild(x);
      
      
  }))

  