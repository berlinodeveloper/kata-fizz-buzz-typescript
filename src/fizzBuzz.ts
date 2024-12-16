class FizzBuzz {
  printFizzBuzzOrNumber(numberValue: number): string {
    const isDivisibleBy3 = numberValue % 3 === 0;
    if (isDivisibleBy3) return "Fizz";
    return numberValue.toString();
  }
}

export default FizzBuzz;
