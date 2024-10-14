"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
class House {
    constructor() {
        this.room = [];
        this.EnergyMeterr = [];
    }
    addRoom(room) {
        this.room.push(room);
        console.log(`${room.name} added to house`);
    }
    updateEnergyConsumption(amount) {
        this.EnergyMeterr.forEach(meter => {
            meter.addConsumption(amount);
        });
    }
}
exports.House = House;
