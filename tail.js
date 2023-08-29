const tail = function(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 2) {
    return [];
  }

  return arr.slice(1);
};

module.exports = tail;
