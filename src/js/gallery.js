'use strict';

var gallery = document.querySelector('.gallery-overlay');
var galleryClose = gallery.querySelector('.gallery-overlay-close');
var galleryImg = gallery.querySelector('.gallery-overlay-image');
var galleryLike = gallery.querySelector('.likes-count');
var galleryComment = gallery.querySelector('.comments-count');

var activePicture = 0;

var Gallery = function() {};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.show = function(index) {
  var self = this;

  galleryClose.onclick = function() {
    self.hide();
  };
  gallery.classList.remove('invisible');

  galleryImg.onclick = function() {
    if(self.pictures.length <= (index + 1)) {
      index = 0;
      self.setActivePicture(index);
    } else {
      self.setActivePicture(index++);
    }
  };

  this.setActivePicture(index);
};

Gallery.prototype.hide = function() {
  gallery.classList.add('invisible');
};

Gallery.prototype.setActivePicture = function(index) {
  activePicture = index;

  galleryImg.src = this.pictures[activePicture].url;
  galleryLike.textContent = this.pictures[activePicture].likes;
  galleryComment.textContent = this.pictures[activePicture].comments;
};

module.exports = new Gallery();
