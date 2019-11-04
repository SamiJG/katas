const { chickensVsFoxes, theHungerGames } = require("./theHungerGames");
const { expect } = require("chai")

describe('chickensVsFoxes', () => {
  it('should return a string', () => {
    expect(chickensVsFoxes("")).to.be.a("string")
  });
  it('should return all the chickens if no foxes', () => {
    expect(chickensVsFoxes("C")).to.equal("C")
    expect(chickensVsFoxes("CCC")).to.equal("CCC")
  });
  it('should not return any chickens if a fox in the field', () => {
    expect(chickensVsFoxes("CF")).to.equal(".F")
    expect(chickensVsFoxes("CFC")).to.equal(".F.")
    expect(chickensVsFoxes("FCCCF")).to.equal("F...F")
  });
});

describe('theHungerGames', () => {
  it('should return a string', () => {
    expect(theHungerGames("CC")).to.be.a("string")
  });
  it('any chickens in cages without a fox should be safe', () => {
    expect(theHungerGames("FC[C]CF")).to.equal("F.[C].F")    
    expect(theHungerGames("FC[C]C[CC]F")).to.equal("F.[C].[CC]F")    
    expect(theHungerGames("CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF")).to.equal("...[CCC]F..[...F.].FFFF[CCC]FFFF")    
  });
});