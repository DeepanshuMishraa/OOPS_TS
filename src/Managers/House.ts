import { EnergyMeter } from "./EnergyManager";
import { Room } from "./Room";


export class House{
    private room:Room[] = [];
    private EnergyMeterr:EnergyMeter[] = [];

    addRoom(room:Room):void{
        this.room.push(room);
        console.log(`${room.name} added to house`);
    }

    updateEnergyConsumption(amount:number):void{
        this.EnergyMeterr.forEach(meter=>{
            meter.addConsumption(amount);
        });

    }


}
