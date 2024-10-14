"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyMeter = void 0;
class EnergyMeter {
    constructor() {
        this.totalConsumption = 0;
    }
    addConsumption(amount) {
        this.totalConsumption += amount;
    }
    getTotalConsumption() {
        return this.totalConsumption;
    }
}
exports.EnergyMeter = EnergyMeter;
