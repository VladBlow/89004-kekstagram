'use strict';

var Picture = require('./picture.js');

var container = document.querySelector('.pictures');

var renderPictures = function(pictures, count) {

  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  pictures.forEach(function(picture, i) {
    var pictureItem = new Picture(picture, i + count);
    container.appendChild(pictureItem.element);
  });

  filters.classList.remove('hidden');
};

module.exports = renderPictures;
