"use strict";

/**
 * Turn your item into items, shoe into shoes etc.
 * @param {number} count
 * @param {string} item
 * @return {string}
 */

module.exports = function(count, item) {
  if (count > 1) return item + "s";
  return item;
};
