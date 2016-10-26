'use strict';

var getPictureElement = require('./get-picture-element.js');
var container = document.querySelector('.pictures');

var renderPictures = function(pictures) {
  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');
  pictures.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filters.classList.remove('hidden');
};

module.exports = renderPictures;