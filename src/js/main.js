'use strict';

var upload = require('./upload');
var load = require('./load.js');
var renderPictures = require('./render-pictures.js');
var isBottomReached = require('./is-bottom-reached.js');

var FOTO_LOAD_URL = 'http://localhost:1507/api/pictures';
var filter = 'filter-popular';
var pageSize = 12;
var currentPage = 0;
var container = document.querySelector('.pictures');
var filters = document.querySelector('.filters');

upload.cleanupResizer();
upload.updateBackground();

var loadPicrures = function(filterPage) {
  load(FOTO_LOAD_URL, {
    from: currentPage * pageSize,
    to: currentPage * pageSize + pageSize,
    filter: filterPage
  }, function(data) {
    if(data.length > 0) {
      renderPictures(data);
    }
  });
};

loadPicrures(filter);

window.addEventListener('scroll', function() {
  setTimeout(function() {
    if(isBottomReached()) {
      currentPage++;
      loadPicrures();
    }
  }, 300);
});

var changeFilter = function(filterID) {
  container.innerHTML = '';
  // var activeFilter = filterID;
  currentPage = 0;
  loadPicrures(filterID, currentPage);
};

filters.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('filters-item')) {
    changeFilter(evt.target.getAttribute('for'));
  }
});
