import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("prints number", (): void => {
    let result = FizzBuzzClass.printFizzBuzzOrNumber(1);

    expect(result).toBe("1");

    result = FizzBuzzClass.printFizzBuzzOrNumber(2);

    expect(result).toBe("2");
  });
});
