module.exports = function plural(count, item) {
  return `${item}${count > 1 && `s`}`;
};
