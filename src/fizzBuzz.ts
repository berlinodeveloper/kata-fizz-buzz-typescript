class FizzBuzz {
  printFizzBuzzOrNumber(numberValue: number): string {
    const isDivisibleBy3 = numberValue % 3 === 0;
    const isDivisibleBy5 = numberValue % 5 === 0;
    if (isDivisibleBy3 && isDivisibleBy5) return "FizzBuzz";
    if (isDivisibleBy3) return "Fizz";
    if (isDivisibleBy5) return "Buzz";
    return numberValue.toString();
  }
}

export default FizzBuzz;
