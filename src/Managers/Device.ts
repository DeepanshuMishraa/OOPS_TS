export abstract class Device{
    constructor(public id:string,public name:string,private powerConsumption:number){

    }

    abstract turnOff():void;
    abstract turnOn():void;

    getPowerConsumption():number{
        return this.powerConsumption;
    }
}
