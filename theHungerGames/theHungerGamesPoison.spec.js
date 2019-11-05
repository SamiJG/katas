const { chickensVsFoxes, theHungerGamesPoison, foxesArePoisoned, concatenateFarm, handleOvernight } = require("./theHungerGamesPoison");
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

describe('theHungerGamesPoison', () => {
  it('should return a string', () => {
    expect(theHungerGamesPoison("CC")).to.be.a("string")
  });
  it('any chickens in cages without a fox should be safe', () => {
    expect(theHungerGamesPoison("FC[C]CF")).to.equal("F.[C].F")    
    expect(theHungerGamesPoison("FC[C]C[CC]F")).to.equal("F.[C].[CC]F")    
    expect(theHungerGamesPoison("CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF")).to.equal("...[CCC]F..[...F.].FFFF[CCC]FFFF")    
  });
  it('any foxes that eats poison should die', () => {
    expect(theHungerGamesPoison("FX")).to.equal(".X")
    expect(theHungerGamesPoison("C[FX]C")).to.equal("C[.X]C")
  });
  it('if poison is between a chicken and fox, the chicken will be safe', () => {
    expect(theHungerGamesPoison("FXC")).to.equal(".XC")    
    expect(theHungerGamesPoison("C[FXC]C")).to.equal("C[.XC]C")
    expect(theHungerGamesPoison("C[FXC]CF")).to.equal(".[.XC].F")

  });
});

describe('foxesArePoisoned', () => {
  it('if farm section does not include poison return false', () => {
    expect(foxesArePoisoned("CF")).to.equal(false)
  });
  it('if farm section includes poison return true', () => {
    expect(foxesArePoisoned("CXF")).to.equal(true)
  });
});

describe('concatenateFarm', () => {
  it('replaces cage placeholders with cages', () => {
    expect(concatenateFarm("CC_C", ["[C]"])).to.equal("CC[C]C");
    expect(concatenateFarm("CC_C_F", ["[C]", "[C]"])).to.equal("CC[C]C[C]F");
  });
});