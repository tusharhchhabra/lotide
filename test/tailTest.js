const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for [3]", () => {
    assert.deepEqual(tail([3]), []);
  });

  it("returns undefined for 2", () => {
    assert.deepEqual(tail(2), undefined);
  });
});
