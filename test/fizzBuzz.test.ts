import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("prints number", (): void => {
    const result = FizzBuzzClass.printFizzBuzzOrNumber();

    const expected = "1";
    expect(result).toBe(expected);
  });
});
