const { addEvenFibonacciNumbers } = require ("./addEvenFibonacciNumbers");
const { expect } = require("chai")

describe('addEvenFibonacciNumbers', () => {
  it('when passed a number returns a number', () => {
    expect(addEvenFibonacciNumbers(0)).to.be.a("number");
  });
  it('should return and even number', () => {
    expect(addEvenFibonacciNumbers(2)%2).to.equal(0);
  });
  it('returns 2 if passed 2', () => {
    expect(addEvenFibonacciNumbers(2)).to.equal(2);
  });
  it('returns 10 if passed 10', () => {
    expect(addEvenFibonacciNumbers(10)).to.equal(10);
  });
  it('returns 44 if passed 50', () => {
    expect(addEvenFibonacciNumbers(50)).to.equal(44);
  });
  it('returns 798 if passed 2000', () => {
    expect(addEvenFibonacciNumbers(2000)).to.equal(798);
  });
});

