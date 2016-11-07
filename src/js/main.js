'use strict';

var upload = require('./upload');
var load = require('./load.js');
var renderPictures = require('./render-pictures.js');

var FOTO_LOAD_URL = 'http://localhost:1507/api/pictures';
var GAP = 100;
var filter = 'filter-popular';
var PAGE_SIZE = 12;
var currentPage = 0;
var container = document.querySelector('.pictures');
var filters = document.querySelector('.filters');
var pictures = [];

upload.cleanupResizer();
upload.updateBackground();

var loadPicrures = function(filterPage) {
  load(FOTO_LOAD_URL, {
    from: currentPage * PAGE_SIZE,
    to: currentPage * PAGE_SIZE + PAGE_SIZE,
    filter: filterPage
  }, function(data) {
    if(data.length > 0) {
      renderPictures(data);
      pictures = data;
    }
  });
};

var isBottomReached = function() {
  var footerElement = document.querySelector('footer');
  var footerPosition = footerElement.getBoundingClientRect();
  return footerPosition.top - window.innerHeight - GAP <= 0;
};

var isNextPageAvailable = function(data, page, pageSize) {
  return page < Math.floor(data.length / pageSize);
};

loadPicrures(filter);

window.addEventListener('scroll', function() {
  setTimeout(function() {
    if(isBottomReached() && isNextPageAvailable(pictures, currentPage, PAGE_SIZE)) {
      currentPage++;
      loadPicrures();
    }
  }, 300);
});

var changeFilter = function(filterID) {
  container.innerHTML = '';
  currentPage = 0;
  loadPicrures(filterID);
};

filters.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('filters-item')) {
    changeFilter(evt.target.getAttribute('for'));
  }
});
