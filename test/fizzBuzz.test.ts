import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("sample test", (): void => {
    var result: boolean = FizzBuzzClass.handle();

    var expected = true;
    expect(result).toBe(expected);
  });
});
