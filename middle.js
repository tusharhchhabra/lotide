const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Please pass 2 arrays as arguments.");
    return undefined;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let elementsAreIdentical = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      elementsAreIdentical = false;
      break;
    }
  }

  return elementsAreIdentical;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);