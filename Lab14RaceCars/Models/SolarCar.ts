import { IRacer } from "../Interfaces/IRacer";

//implement interfaces but extend classes
export class SolarCar implements IRacer{
// SolarCar MUST have the same properties and methods as the IRacer interface. 
    team:string;
    speed:number;

    constructor(team:string){
        this.team = team;
        this.speed = 0;
    }

    accelerate(): void {
        this.speed += 1;
    }

    isFuelEmpty(): boolean {
        return false;
    }
}