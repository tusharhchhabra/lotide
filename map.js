const map = (array, callback) => {
  let results = [];
  array.forEach(elem => results.push(callback(elem)));
  return results;
};

const words = ["ground", "control", "to", "major", "tom", ""];
const results1 = map(words, word => word[0]);
console.log(results1);


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


const map1 = map(words, word => word[0]);
assertArraysEqual(map1, [ 'g', 'c', 't', 'm', 't', undefined]);

const map2 = map([], elem => typeof elem);
assertArraysEqual(map2, []);

const map3 = map([2, 1, 3], num => num * num);
assertArraysEqual(map3, [4, 1, 9]);