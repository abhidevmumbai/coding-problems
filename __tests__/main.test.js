const orderItems = require("../main");

describe("OrderItems", () => {
  it(`Test case 1\n items = ["red", "blue", "red", "green", "blue"]
 order = ["blue", "red", "black"]
 expected ["blue", "blue", "red", "red"]
  `, () => {
    const items = ["red", "blue", "red", "green", "blue"];
    const order = ["blue", "red", "black"];

    expect(orderItems(items, order)).toEqual(["blue", "blue", "red", "red"]);
  });

  it(`Test case 2: order array has single element \n items = ["red", "blue", "red", "green", "blue"]
 order = ["blue"]
 expected ["blue", "blue"]
  `, () => {
    const items = ["red", "blue", "red", "green", "blue"];
    const order = ["blue"];

    expect(orderItems(items, order)).toEqual(["blue", "blue"]);
  });

  it(`Test case 3: items array is empty\n items = []
 order = ["blue", "red", "black"]
 expected []
  `, () => {
    const items = [];
    const order = ["blue", "red", "black"];

    expect(orderItems(items, order)).toEqual([]);
  });

  it(`Test case 4: order array is empty\n items = ["red", "blue", "red", "green", "blue"]
 order = []
 expected ["blue", "blue"]
  `, () => {
    const items = ["red", "blue", "red", "green", "blue"];
    const order = [];

    expect(orderItems(items, order)).toEqual([]);
  });

  it(`Test case 5: invalid input\n items = undefined
 order = undefined
 expected "Invalid input..."
  `, () => {
    const items = undefined;
    const order = undefined;

    expect(orderItems(items, order)).toMatch(/invalid input/i);
  });

  it(`Test case 6: no match\n items = ["red", "blue", "red", "green", "blue"]
 order = ["orange", "yellow", "brown"]
 expected []
  `, () => {
    const items = ["red", "blue", "red", "green", "blue"];
    const order = ["orange", "yellow", "brown"];

    expect(orderItems(items, order)).toEqual([]);
  });
});
