'use strict';

var getPictureElement = require('./get-picture-element.js');
var gallery = require('./gallery.js');

var Picture = function(data, i) {
  this.data = data;
  this.element = getPictureElement(data);

  this.element.onclick = function(evt) {
    gallery.show(i);
    evt.preventDefault();
  };

  this.remove = function() {
    this.element.onclick = null;
  };
};

module.exports = Picture;
