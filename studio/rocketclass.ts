import { Payload } from './Payload'
import { Cargo } from './cargoclass'
import { Astronaut } from './astronautclass';

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name, totalCapacityKg) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: any[]): number { 
    if (items.length === 0) {
      return 0;
    }
    let totalMass: number = 0;
    for (let item of items) {
      totalMass += item.massKg;
    }
    return totalMass;
  }

  currentMassKg(): number {
    return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }else {
      return false;
    }
  }
}
