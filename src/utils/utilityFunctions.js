// const _ = require('lodash');

const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

// const capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

const tagCapital = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\.+/, '')
    .replace(/(js)+/g, '.js');
  // .capitalize();
};

const dup = function(text) {
  new Set(text);
};

module.exports = { slugify, tagCapital, dup };
