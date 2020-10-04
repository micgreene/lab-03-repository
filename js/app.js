'use strict';
let $gallery = $('#photo-gallery');
let $photoTemplate = $('#photo-template').html();
let photoArray = [];

$.ajax('./data/page-1.json').then(function (photos) {
  photos.forEach(photo => {
    //let objectArray = [];
    //let rendered = Mustache.render($photoTemplate, photo);
    photoArray.push(photo);
    //$gallery.append(rendered);
  });
  renderSection(photoArray);
});

function renderSection(photos) {
  $gallery.html('');
  photos.forEach(photo => {
    let rendered = Mustache.render($photoTemplate, photo);
    $gallery.append(rendered);
  });
}

$(function () {
  $('#filters').on('change', function (e) {
    $('div').hide();
    $(`.${e.target.value}`).show();
  });
});

$('#ordering').on('change', function (e) {
  if(){}
  photoArray.sort
});
