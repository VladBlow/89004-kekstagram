'use strict';

var FOTO_LOAD_URL = 'bin/data/data.json';

var load = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'cb' + Date.now();
  }

  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

load(FOTO_LOAD_URL, function(data) {
  console.log(data);
}, '__jsonpCallback');
