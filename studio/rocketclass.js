"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // console.log(items.length)
        // console.log(items)
        if (items.length === 0) {
            return 0;
        }
        var totalMass = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            totalMass += item.massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        // console.log(this.cargoItems)
        // console.log(this.astronauts)
        // console.log(this.sumMass(this.cargoItems))
        // console.log(this.sumMass(this.astronauts))
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        // console.log(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            // console.log(this.astronauts)
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
