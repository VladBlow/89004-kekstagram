'use strict';

var template = document.querySelector('template');
var container = document.querySelector('.pictures');
var templateContainer = 'content' in template ? template.content : template;
var IMAGE_LOAD_TIMEOUT = 10000;
var FOTO_LOAD_URL = 'http://localhost:1507/api/pictures';
var callbackName = '__jsonpCallback' + Date.now();

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

var renderPictures = function(pictures) {
  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');
  pictures.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filters.classList.remove('hidden');
};

var load = function(url, callback) {

  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

load(FOTO_LOAD_URL, renderPictures);
