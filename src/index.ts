import { House } from "./Managers/House";
import { smartLight } from "./Managers/Light";
import { Room } from "./Managers/Room";
import { ThermoStat } from "./Managers/Thermostat";

const myHouse = new House();

const livingRoom = new Room("Living Room");
livingRoom.addDevice(new smartLight("L1", "Living Room Light", 10));
livingRoom.addDevice(new ThermoStat("T1", "Living Room Thermostat", 1000));

const bedroom = new Room("Bedroom");
bedroom.addDevice(new smartLight("L2", "Bedroom Light", 8));

myHouse.addRoom(livingRoom);
myHouse.addRoom(bedroom);
