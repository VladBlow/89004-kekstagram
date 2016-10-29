'use strict';

var Picture = require('./picture.js');
var gallery = require('./gallery.js');

var container = document.querySelector('.pictures');

var renderPictures = function(pictures) {

  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  pictures.forEach(function(picture, i) {
    var pictureItem = new Picture(picture, i);
    container.appendChild(pictureItem.element);
  });

  gallery.setPictures(pictures);

  filters.classList.remove('hidden');
};

module.exports = renderPictures;
