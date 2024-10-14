"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(name) {
        this.name = name;
        this.devices = [];
    }
    addDevice(device) {
        this.devices.push(device);
        console.log(`${device.name} added to ${this.name}`);
    }
    getTotalPowerConsumption() {
        let totalPowerConsumption = 0;
        this.devices.forEach(device => {
            totalPowerConsumption += device.getPowerConsumption();
        });
        console.log(`Total power consumption of ${this.name} is ${totalPowerConsumption}`);
    }
}
exports.Room = Room;
