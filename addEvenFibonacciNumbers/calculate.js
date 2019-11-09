const { addEvenFibonacciNumbers } = require('./addEvenFibonacciNumbers')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Enter max value: `, (max) => {  
  const whiteText = "\x1b[37m"
  const yellowText = "\x1b[33m"
  const redText = "\x1b[31m"

  try {
    console.log(`${whiteText}%s${yellowText}%s`,
    `The total of all even numbers in the Fibonacci Sequence under ${max} is `,
    `${addEvenFibonacciNumbers(max)}`)
    readline.close()
  } catch(error) {
    console.log(`${redText}%s`, error)
    readline.close()
  }
});