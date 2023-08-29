const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, predicate) => {
  for (const key in obj) {
    if (predicate(obj[key])) {
      return key;
    }
  }
};

const key1 = findKey({
  "Blue Hill":  { stars: 1 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 2 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
}, x => x.stars === 2);

assertEqual(key1, "noma");

const findTen = value => value === 10;
const result1 = findKey({ a: 5, b: 10, c: 15 }, findTen);
assertEqual(result1, 'b');

const isGreaterThanTen = value => value > 10;
const result2 = findKey({ p: 1, q: 3, r: 5 }, isGreaterThanTen);
assertEqual(result2, undefined);

module.exports = findKey;