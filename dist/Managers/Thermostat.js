"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermoStat = void 0;
const Device_1 = require("./Device");
class ThermoStat extends Device_1.Device {
    constructor(id, name, powerConsumption) {
        super(id, name, powerConsumption);
        this.temperature = 20;
    }
    turnOn() {
        console.log(`${this.name} is Always on`);
    }
    turnOff() {
        console.log(`${this.name} is Always on`);
    }
    getTemperature() {
        console.log(`Current temperature is ${this.temperature}`);
    }
    setTemperature(temp) {
        this.temperature = temp;
        console.log(`Temperature set to ${this.temperature}`);
    }
}
exports.ThermoStat = ThermoStat;
