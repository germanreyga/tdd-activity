const assert = require("assert");
const VectorCalculator = require("../app/VectorCalculator");

describe("VectorCalc", () => {
  describe("#sum", () => {
    it("Should sum the vectors", () => {
      let v1 = { x: 4, y: 3 };
      let v2 = { x: 1, y: 3 };

      assert.deepEqual({ x: 5, y: 6 }, VectorCalculator.sum(v1, v2));
    });
  });

  describe("#sub", () => {
    it("Should substract the vectors", () => {
      let v1 = { x: 4, y: 3 };
      let v2 = { x: 1, y: 3 };

      assert.deepEqual({ x: 3, y: 0 }, VectorCalculator.sub(v1, v2));
    });
  });

  describe("#scalar", () => {
    it("Should scale a single vector", () => {
      let v = { x: 4, y: 3 };
      let scalar = 2.5;

      assert.deepEqual({ x: 10, y: 7.5 }, VectorCalculator.scalar(v, scalar));
    });
  });

  describe("#dot", () => {
    it("Should calculate the dot product of 2 vectors", () => {
      let v1 = { x: 2, y: 10 };
      let v2 = { x: 5, y: 2 };

      assert.deepEqual(30, VectorCalculator.dot(v1, v2));
    });
  });
});
