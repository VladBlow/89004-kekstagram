'use strict';

var Picture = require('./picture.js');
var getPictureElement = require('./get-picture-element.js');
var gallery = require('./gallery.js');

var container = document.querySelector('.pictures');

var renderPictures = function(pictures) {

  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  console.log(pictures);

  pictures.forEach(function(picture) {
  // debugger;
    console.log(typeof Picture);
    var pictureItem = new Picture(picture);
    container.appendChild(pictureItem.element);
    // container.appendChild(getPictureElement(picture));
  });

  gallery.setPictures(pictures);

  filters.classList.remove('hidden');
};

module.exports = renderPictures;
