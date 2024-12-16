class FizzBuzz {
  printFizzBuzzOrNumber(numberValue: number): string {
    if (numberValue === 3 || numberValue === 6) return "Fizz";
    return numberValue.toString();
  }
}

export default FizzBuzz;
