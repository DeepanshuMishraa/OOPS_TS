import { Device } from "./Device";


export class smartLight extends Device {
    private isOn:boolean = false;
    constructor(id:string,name:string,powerConsumption:number){
        super(id, name, powerConsumption);
    }

    turnOn():void{
        this.isOn =true;
         console.log(`${this.name} turned on`);
    }

    turnOff():void{
        this.isOn = false;
         console.log(`${this.name} turned off`);
    }
}
