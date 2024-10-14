import { Device } from "./Device";

export class ThermoStat extends Device{
    private temperature:number = 20;

    constructor(id:string,name:string,powerConsumption:number){
        super(id, name, powerConsumption);
    }

    turnOn():void{
        console.log(`${this.name} is Always on`);
    }

    turnOff(): void {
        console.log(`${this.name} is Always on`);
    }

    getTemperature():void{
        console.log(`Current temperature is ${this.temperature}`);
    }

    setTemperature(temp:number):void{
        this.temperature = temp;
        console.log(`Temperature set to ${this.temperature}`);
    }

}
