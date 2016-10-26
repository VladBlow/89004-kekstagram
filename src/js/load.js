'use strict';

var callbackName = '__jsonpCallback' + Date.now();

var load = function(url, callback) {

  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  // debugger;
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

module.exports = load();
