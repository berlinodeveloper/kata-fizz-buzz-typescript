import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("prints number", (): void => {
    const numberValue: number = 1;
    const result = FizzBuzzClass.printFizzBuzzOrNumber(numberValue);

    const expected: string = numberValue.toString();
    expect(result).toBe(expected);
  });
});
