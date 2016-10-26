'use strict';

var upload = require('./upload');
var load = require('./load.js');
var renderPictures = require('./render-pictures.js');

var FOTO_LOAD_URL = 'http://localhost:1507/api/picture';

upload.cleanupResizer();
upload.updateBackground();

load(FOTO_LOAD_URL, renderPictures);
