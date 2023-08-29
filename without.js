const without = (source, itemsToRemove) => {
  if (!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    console.log("Error: Arguments must be arrays.");
    return;
  }

  let resultArray = [];

  for (const sourceItem of source) {
    let shouldExcludeItem = false;

    for (const itemToRemove of itemsToRemove) {
      if (itemToRemove === sourceItem) {
        shouldExcludeItem = true;
      }
    }
    
    if (!shouldExcludeItem) {
      resultArray.push(sourceItem);
    }
  }

  return resultArray;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 3], []), [1, 3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;