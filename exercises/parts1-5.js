"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
        this.milesPerKilometer = this.milesPerKilometer;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesTo = kilometersAway * this.milesPerKilometer;
        var hoursTo = milesTo / this.speedMph;
        return hoursTo / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var shuttle = new Spacecraft('determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
shuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
