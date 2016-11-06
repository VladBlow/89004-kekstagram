'use strict';

module.exports = function(list, filterID) {
  switch(filterID) {
    case 'filter-popular':
      return list;
    case 'filter-new':
      return sortList.sort(function(a, b) {
        return b.created - a.created;
      });
      break;
    case 'filter-discussed':
      return sortList.sort(function(a, b) {
        return b.comments - a.comments;
      });
  }
  return list;
};
