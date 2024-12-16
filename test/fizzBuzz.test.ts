import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe("Fizz Buzz Test Suite", function (): void {
  it("prints number", (): void => {
    let result = FizzBuzzClass.printFizzBuzzOrNumber(1);

    expect(result).toBe("1");

    result = FizzBuzzClass.printFizzBuzzOrNumber(2);

    expect(result).toBe("2");

    result = FizzBuzzClass.printFizzBuzzOrNumber(4);

    expect(result).toBe("4");
  });

  it("prints Fizz for numbers multiple of 3", (): void => {
    let result = FizzBuzzClass.printFizzBuzzOrNumber(3);

    expect(result).toBe("Fizz");

    result = FizzBuzzClass.printFizzBuzzOrNumber(6);

    expect(result).toBe("Fizz");

    result = FizzBuzzClass.printFizzBuzzOrNumber(9);

    expect(result).toBe("Fizz");
  });

  it("prints Buzz for numbers multiple of 5", (): void => {
    let result = FizzBuzzClass.printFizzBuzzOrNumber(5);

    expect(result).toBe("Buzz");
  });
});
