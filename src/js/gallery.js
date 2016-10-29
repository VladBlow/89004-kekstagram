'use strict';

var gallery = document.querySelector('.gallery-overlay');
var galleryClose = gallery.querySelector('.gallery-overlay-close');
var galleryImg = gallery.querySelector('.gallery-overlay-image');

var activePicture = 0;

var Gallery = function(pictures) {

};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.show = function(index) {
  var self = this;

  galleryClose.onclick = function() {
    self.hide();
  };
  gallery.classList.remove('invisible');

  this.setActivePicture(index);
};

Gallery.prototype.hide = function() {
  gallery.classList.add('invisible');
};

Gallery.prototype.setActivePicture = function(index) {
  activePicture = index;

  // galleryImg.src = this.pictures[activePicture].url;
};

module.exports = new Gallery();
