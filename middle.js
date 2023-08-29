const middle = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("Please pass an array as the argument.");
    return undefined;
  }

  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    const elem1 = arr[arr.length / 2 - 1];
    const elem2 = arr[arr.length / 2];
    return [elem1, elem2];
  } else {
    let elem = arr[(arr.length - 1) / 2];
    return [elem];
  }
};

module.exports = middle;