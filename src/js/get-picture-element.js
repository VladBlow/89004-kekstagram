'use strict';

var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;
var IMAGE_LOAD_TIMEOUT = 10000;

var getPictureElement = function(picture) {
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;

  var img = pictureElement.querySelector('img');

  var image = new Image();
  var imageTimeout = null;

  image.onload = function(evt) {
    clearTimeout(imageTimeout);
    img.src = evt.target.src;
    image.width = 182;
    image.height = 182;
  };

  image.onerror = function() {
    clearTimeout(imageTimeout);
    pictureElement.classList.add('picture-load-failure');
  };

  image.src = picture.url;

  imageTimeout = setTimeout(function() {
    image.classList.add('picture-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return pictureElement;
};

module.exports = getPictureElement;
