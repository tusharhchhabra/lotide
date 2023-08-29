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


const letterPositions = (string) => {
  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }

  return results;
};


const positions = letterPositions("Lighthouse Labs");

assertArraysEqual(positions["L"], [0, 11]);
assertArraysEqual(positions["h"], [3, 5]);
assertArraysEqual(positions[" "], [10]);

module.exports = letterPositions;