import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("sample test", (): void => {
    const result = FizzBuzzClass.printFizzBuzzOrNumber();

    const expected = "";
    expect(result).toBe(expected);
  });
});
