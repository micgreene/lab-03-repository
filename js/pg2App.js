'use strict';
let $gallery = $('#photo-gallery');
let $photoTemplate = $('#photo-template').html();
let photoArray = [];

$.ajax('./data/page-2.json').then(function (photos) {
  photos.forEach(photo => {
    photoArray.push(photo);
  });
  renderSection(photoArray);
});

function renderSection(photos) {
  $gallery.html('');
  photos.forEach(photo => {
    let rendered = Mustache.render($photoTemplate, photo);
    $gallery.append(rendered);
  });
  photoArray.forEach(element => {
    console.log('running:');
    console.log(element.hidden);
    if(element.hidden === true){
      console.log('hiding:');
      $(`.${element.keyword}`).hide();
    }
  });
}

$(function () {
  $('#filters').on('change', function (e) {
    $('div').hide();
    photoArray.forEach(element => {
      element.hidden = true;
    });
    $(`.${e.target.value}`).show();
    photoArray.forEach(element => {
      if (e.target.value === element.keyword) {
        element.hidden = false;
      }
    });
    if (e.target.value === 'default') {
      $('div').show();
      photoArray.forEach(element => {
        element.hidden = false;
      });
    }
  });
});

$('#ordering').on('change', function (e) {
  if (e.target.value === 'name') {
    photoArray.sort((a, b) => {
      return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
    });
  } else if (e.target.value === 'num-of-horns') {
    photoArray.sort((a, b) => {
      return a.horns < b.horns ? 1 : -1;
    });
  }
  renderSection(photoArray);
});
