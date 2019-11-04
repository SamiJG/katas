
function theHungerGames(farm = "") {
  const CAGE_PLACE_HOLDER ="_";

  const cageRegex = /\[(.*?)\]/g;
  
  const cages = farm.match(cageRegex);

  const outside = farm.replace(cageRegex, CAGE_PLACE_HOLDER);
  let outsideMorningFarm = chickensVsFoxes(outside);
  
  if (cages) {
  const cagesMorningAfter = cages.map(cage => chickensVsFoxes(cage));
  outsideMorningFarm = outsideMorningFarm.split(CAGE_PLACE_HOLDER)  
  return cagesMorningAfter.reduce((acc, section, index) => acc + section + outsideMorningFarm[index+1], outsideMorningFarm[0]);
  }

  return outsideMorningFarm;
}

function chickensVsFoxes(farm) {
return farm.includes("F")? farm.replace(/C/g, ".") : farm;
}

module.exports  = { theHungerGames, chickensVsFoxes }