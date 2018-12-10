const { add, subtract } = require("./app"); //destructuring
// const assert = require("assert");

//testing using jest

//describe groups the tests --- it instead of test is for mocha

//UNIT TESTING
describe("add()", () => {
  test("add(1,5) is equal to 6", () => {
    const actual = add(1, 5);
    const expectation = 6;
    expect(actual).toBe(expectation);
  });

  test("add() with 1 argument throws an error", () => {
    expect(add).toThrow();
  });
});

describe("subtract()", () => {
  test("subtract(6,7) is equal to -1", () => {
    const actual = subtract(6, 7);
    const expectation = -1;
    expect(actual).toBe(expectation);
  });

  test("subtract() with 1 argument throws an error", () => {
    expect(() => subtract(1).toThrow());
  });
});

console.log("All tests ran successfully");

/////////////////////////////////////////////
/////////////////////////////////////////////
// console.log("First test: add(1,5) is equal to 6");

// const actual = add(1, 5);

// const expectation = 6;

//check error
// if (result !== 6) {
//   throw "Add did not bring back 6 when given 1 and 5";
// }

// vanilla js assertion - check if what we were expecting is what we are given

// if (actual !== expectation) {
//   throw "Add did not bring back 6 when given 1 and 5";
// }

//node assertion
// assert.equal(actual, expectation);

// console.log("First test ran succesfully");

// console.log("Second test: add() with 1 arguments throws an error");

//captures nay erorr thrown

/////////JEST, takes an argument and callback with test conditions
