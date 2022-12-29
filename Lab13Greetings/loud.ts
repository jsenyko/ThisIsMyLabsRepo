import { Greeter } from "./greet";


class Loud extends Greeter {
    private extra:string;

    constructor(greeting:string, extra:string){
        super(greeting);
        this.greeting = greeting
        this.extra = extra
    }

    addVolume() : void {
        this.extra = this.extra + "!";
    }

    greet(name:string) :string{
    return `${this.greeting}, ${name} ${this.extra}!`
}

}

export {Loud}