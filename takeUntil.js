const takeUntil = (array, callback) => {
  const results = [];
  
  for (const elem of array) {
    if (callback(elem)) {
      break;
    }
    results.push(elem);
  }

  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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


const stopAtThree = elem => elem === 3;
const result1 = takeUntil([1, 2, 3, 4, 5], stopAtThree);
assertArraysEqual(result1, [1, 2]);

const isEven = elem => elem % 2 === 0;
const result2 = takeUntil([1, 3, 5, 2, 7, 9], isEven);
assertArraysEqual(result2, [1, 3, 5]);

const result = takeUntil([10, 20, 30, 40], () => false);
assertArraysEqual(result, [10, 20, 30, 40]);


module.exports = takeUntil;