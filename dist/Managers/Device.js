"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
class Device {
    constructor(id, name, powerConsumption) {
        this.id = id;
        this.name = name;
        this.powerConsumption = powerConsumption;
    }
    getPowerConsumption() {
        return this.powerConsumption;
    }
}
exports.Device = Device;
