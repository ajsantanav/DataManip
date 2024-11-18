let totalDistance = 1500;

// speeds
let fiftyFiveMph = 55;
let sixtyMph = 60;
let seventyfive = 75;

// miles per gallon

let fiveFiveGal = 30;
let sixtyGal = 28;
let seventyFiveGal = 23;

// Fuell budget and total cost
let fuelBudget = 175;
let avgCost = 3;
const totalCostPerGallon = fuelBudget/avgCost;

// Miles to gallon needed

let milesToGallonNeeded = totalDistance/totalCostPerGallon;

// Total Gallons
console.log("Total gallons allowed with the budget: " + totalCostPerGallon);

// Gallons needed
console.log("Gallons needed to complete the trip: " + milesToGallonNeeded)

//gallons used in the trip

console.log("Gallons used total at 55mph: " + totalDistance/fiveFiveGal);
console.log("Gallons used total at 60mph: " + totalDistance/sixtyGal);
console.log("Gallons used total at 75mph: " + totalDistance/seventyFiveGal);


// Total travel times

let atFiveFiveMph = totalDistance/fiftyFiveMph;
console.log("55mph will take "+ atFiveFiveMph + "hours");

let atSixtyMph = totalDistance/sixtyMph;
console.log("60mph will take "+ atSixtyMph + "hours");

let atSevenFiveMph = totalDistance/seventyfive;
console.log("75mph will take "+ atSevenFiveMph + "hours");

console.log();


