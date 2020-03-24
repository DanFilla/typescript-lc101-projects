import { Payload } from "./Payload";

export class Astronaut implements Payload{
  name: string;
  massKg: number;

  constructor(massKg, name) {
    this.massKg = massKg;
    this.name = name;
  }
}