"use strict";
exports.__esModule = true;
var astronautclass_1 = require("./astronautclass");
var cargoclass_1 = require("./cargoclass");
var rocketclass_1 = require("./rocketclass");
var falcon9 = new rocketclass_1.Rocket('Falcon 9', 7500);
var astronauts = [
    new astronautclass_1.Astronaut(75, 'Mae'),
    new astronautclass_1.Astronaut(81, 'Sally'),
    new astronautclass_1.Astronaut(99, 'Charles')
];
for (var i = 0; i < astronauts.length; i++) {
    var astronaut = astronauts[i];
    var status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log(astronaut.name + ": " + status_1);
}
var cargo = [
    new cargoclass_1.Cargo(3107.39, "Satellite"),
    new cargoclass_1.Cargo(1000.39, "Space Probe"),
    new cargoclass_1.Cargo(753, "Water"),
    new cargoclass_1.Cargo(541, "Food"),
    new cargoclass_1.Cargo(2107.39, "Tesla Roadster"),
];
for (var i = 0; i < cargo.length; i++) {
    var c = cargo[i];
    var loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log(c.material + ": " + loaded);
}
console.log("Final cargo and astronaut mass: " + falcon9.currentMassKg() + " kg.");
