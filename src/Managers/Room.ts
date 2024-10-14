import { Device } from "./Device";

export class Room{
    private devices:Device[] = [];

    constructor(public name:string){}

    addDevice(device:Device):void{
        this.devices.push(device);
        console.log(`${device.name} added to ${this.name}`);
    }

    getTotalPowerConsumption():void{
        let totalPowerConsumption = 0;
        this.devices.forEach(device=>{
            totalPowerConsumption+=device.getPowerConsumption();
        });
        console.log(`Total power consumption of ${this.name} is ${totalPowerConsumption}`);
    }
}
