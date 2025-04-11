import { add, subtract, multiply, divide } from ".";

/*describe("add()", () => {
  test("return 5 if called with add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("return a negative value if the greater argument is negativ", () => {
    const result = add(-5, 3);
    expect(result).toBeLessThan(0);
  });
});
*/
test("if add(2,3) results in 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("if result is negativ , if the 'larger' number is negativ", () => {
  const result = add(-5, 3);
  expect(result).toBeLessThan(0);
});
test("if result is close to 0.3 , if called with add(0.1,0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});
/////////////////////////////////////////////////////////////////////////////////////
test("if subtract (15,5) , result is 10", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("if result is negativ , if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});
////////////////////////////////////////////////////////////////////////////////////
test("if result is 8 , if called with multiply(4,2)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("if result is negativ , if the first number is negativ", () => {
  const result = multiply(-4, 2);
  expect(result).toBeLessThan(0);
});
test("if the result is negativ, if the second number is negativ", () => {
  const result = multiply(4, -2);
  expect(result).toBeLessThan(0);
});
test("if the result is positiv , if called with tow negativ numbers", () => {
  const result = multiply(-4, -2);
  expect(result).toBeGreaterThan(0);
});
////////////////////////////////////////////////////////////////////////////////////
test("if the result is 3 , if called with divide(9,3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("the result is 'You should not do this!' , if the second number is 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
