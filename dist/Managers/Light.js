"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartLight = void 0;
const Device_1 = require("./Device");
class smartLight extends Device_1.Device {
    constructor(id, name, powerConsumption) {
        super(id, name, powerConsumption);
        this.isOn = false;
    }
    turnOn() {
        this.isOn = true;
        console.log(`${this.name} turned on`);
    }
    turnOff() {
        this.isOn = false;
        console.log(`${this.name} turned off`);
    }
}
exports.smartLight = smartLight;
