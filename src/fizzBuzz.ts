class FizzBuzz {
  printFizzBuzzOrNumber(numberValue: number): string {
    if (numberValue === 3) return "Fizz";
    return numberValue.toString();
  }
}

export default FizzBuzz;
