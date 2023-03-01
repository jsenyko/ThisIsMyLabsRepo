//business logic

import { IRacer } from "../Interfaces/IRacer";

export function findRacersWithEmptyFuel(racers:IRacer[]) : IRacer[] {
    
    let emptyRaceArray:IRacer[] = [];

    for(let r = 0; r <= racers.length; r++){
        if(racers[r].isFuelEmpty()) {
            emptyRaceArray.push(racers[r])
        }
    }
    return emptyRaceArray
    //or you can write it like this: return racers.filter((x) => x.isFuelEmpty());

    //or like this:
    //function findRacersWithEmptyFuel(racers: IRacer[]); IRacer[] {
    //    let emptyFuelArray: IRacer[] = [];
    //      racers.filter((element) => {
    //      if (element.IsFuelEmpty()) {
    //          return emptyFuelArray.push(element);
    //     }
    // });
    // return emptyFuelArray;
    // }
}

export function findAverageSpeed(racers:IRacer[]) : number {
    let totalSpeed = 0;

    if(racers.length ===0){
        return 0;
    }
    
    for(let racer of racers){
        totalSpeed += racer.speed;
    }

    return totalSpeed / racers.length;
}

export function getFasterRacer(racerA:IRacer, racerB:IRacer) :any{
    if(racerA.speed > racerB.speed){
        return racerA;
    }
    else if(racerA.speed < racerB.speed){
        return racerB;
    }
    else{
        return null;
    }
}