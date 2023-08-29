const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const results = {};

  for (const char of string) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
};


let count = countLetters("Lighthouse Labs");

assertEqual(count["L"], 2);
assertEqual(count["s"], 2);
assertEqual(count["e"], 1);

module.exports = countLetters;