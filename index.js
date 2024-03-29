// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-3-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";







// Write code to generate the LC04 report here:
console.log("-------------------------------------\n" +"> LC04 - LAUNCH CHECKLIST\n" + "-------------------------------------\n" +"Date: " + date + "\nTime: " + time + "\n\n" + "-------------------------------------\n" + "> ASTRONAUT INFO\n" + "-------------------------------------\n" + "* count: " + astronautCount + "\n* status: " + astronautStatus + "\n\n-------------------------------------\n> FUEL DATA\n-------------------------------------\n* Fuel temp celsius: " + fuelTempCelsius + " C\n* Fuel level: "+ fuelLevel +"%\n\n-------------------------------------\n> MASS DATA\n-------------------------------------\n* Crew mass: " + crewMassKg + " kg\n* Fuel mass: " + fuelMassKg + "kg\n* Shuttle mass: " + shuttleMassKg + " kg\n* Total mass: " + totalMassKg + " kg\n\n-------------------------------------\n> FLIGHT PLAN\n-------------------------------------\n* weather: " + weatherStatus + "\n\n-------------------------------------\n> OVERALL STATUS\n-------------------------------------\n* Clear for takeoff: Yes");



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
const input = require('readline-sync');

let valueForAstronautCount = input.question("Enter the value for astronautCount ");
console.log(crewMassKg);
console.log(totalMassKg);