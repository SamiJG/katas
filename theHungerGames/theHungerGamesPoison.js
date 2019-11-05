const CAGE_PLACE_HOLDER ="_";

function theHungerGamesPoison(farm = "") {

  const cageRegex = /\[(.*?)\]/g;
  
  const cages = farm.match(cageRegex);

  const outside = farm.replace(cageRegex, CAGE_PLACE_HOLDER);

  let outsideMorningFarm = handleOvernight(outside);

  if (cages) {
  const cagesMorningAfter = cages.map(cage => handleOvernight(cage));
  return concatenateFarm(outsideMorningFarm, cagesMorningAfter)
  }
  return outsideMorningFarm;

}



const chickensVsFoxes = (farm) => farm.includes("F")? farm.replace(/C/g, ".") : farm;

const foxesArePoisoned = (section) => section.includes("X");

const concatenateFarm = (outside, cages) => {
  const outsideMorningAfter = outside.split(CAGE_PLACE_HOLDER);
  return cages.reduce((acc, section, index) => acc + section + outsideMorningAfter[index+1], outsideMorningAfter[0]);
}

const handleOvernight = (selection) => foxesArePoisoned(selection)
      ? selection.split("X").map(section => chickensVsFoxes(section).replace(/F/g, ".")).join("X")
      : chickensVsFoxes(selection);


module.exports  = { theHungerGamesPoison, chickensVsFoxes, foxesArePoisoned, concatenateFarm, handleOvernight}