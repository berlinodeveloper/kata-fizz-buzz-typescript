class FizzBuzz {
  printFizzBuzzOrNumber(numberValue: number): string {
    const isDivisibleBy3 = numberValue % 3 === 0;
    if (isDivisibleBy3) return "Fizz";
    if (numberValue === 5) return "Buzz";
    return numberValue.toString();
  }
}

export default FizzBuzz;
