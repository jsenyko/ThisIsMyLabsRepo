import { Greeter } from "./greet";

class JsGreeter extends Greeter {
      
    greet(name:string) :string{
        return "console.log" + "(" + this.greeting + ", " + name + "!)";
    }
}

export {JsGreeter}