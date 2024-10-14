"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const House_1 = require("./Managers/House");
const Light_1 = require("./Managers/Light");
const Room_1 = require("./Managers/Room");
const Thermostat_1 = require("./Managers/Thermostat");
const myHouse = new House_1.House();
const livingRoom = new Room_1.Room("Living Room");
livingRoom.addDevice(new Light_1.smartLight("L1", "Living Room Light", 10));
livingRoom.addDevice(new Thermostat_1.ThermoStat("T1", "Living Room Thermostat", 1000));
const bedroom = new Room_1.Room("Bedroom");
bedroom.addDevice(new Light_1.smartLight("L2", "Bedroom Light", 8));
myHouse.addRoom(livingRoom);
myHouse.addRoom(bedroom);
