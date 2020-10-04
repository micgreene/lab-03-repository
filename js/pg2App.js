'use strict';
let $gallery = $('#photo-gallery');
let $photoTemplate = $('#photo-template').html();
let photoArray = [];

$.ajax('./data/page-2.json').then(function (photos) {
  photos.forEach(photo => {
    //let objectArray = [];
    let rendered = Mustache.render($photoTemplate, photo);
    photoArray.push(rendered);
    $gallery.append(rendered);
  });
});

$(function(){
  $('#filters').on('change', function (e) {
    $('div').hide();
    $(`.${e.target.value}`).show();
    if(e.target.value === 'default'){
      $('div').show();
    }
  });
});
