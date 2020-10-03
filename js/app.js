'use strict';
let $gallery = $('#photo-gallery');
let $photoTemplate = $('#photo-template');
let dropDown = document.getElementById('filters');
let photoArray = [];

$.ajax('./data/page-1.json').then(function (photos) {
  photos.forEach(photo => {
    let $newPhoto = $photoTemplate.clone();
    $newPhoto.removeAttr('id');
    $newPhoto.id = photo.keyword;
    $newPhoto.find('h2').text(photo.title);
    $newPhoto.find('img').attr('src', photo.image_url);
    $newPhoto.find('p').text(photo.description);
    // $newPhoto[0].childNodes[1].textContent = photo.title;
    // $newPhoto[0].childNodes[3].src = photo.image_url;
    // $newPhoto[0].childNodes[5].textContent = photo.description;
    photoArray.push($newPhoto);
    $gallery.append($newPhoto);
  });
  $photoTemplate.hide();
})

function filterResults(e){
  for(let i = 0; i < photoArray.length; i++){
    photoArray[i].hide();
    if(e.target.value === photoArray[i].id){
      photoArray[i].show();
    } else if (e.target.value === 'default'){
      photoArray[i].show();
    }
  }
}

dropDown.addEventListener('change', filterResults);