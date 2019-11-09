const addEvenFibonacciNumbers = (max) => {
  let count = 0;
  let previousNumber = 1;
  let number = 1;
  let nextNumber;

  while (number <= max) {
    nextNumber = number + previousNumber;

    if (nextNumber > max) return count;
    previousNumber = number;
    number = nextNumber;

    if (nextNumber%2 === 0) count += nextNumber;
  }
  return count;
};

module.exports = { addEvenFibonacciNumbers };

