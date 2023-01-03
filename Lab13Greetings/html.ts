import {Greeter} from "./greet";

class HTMLGreeter extends Greeter {

    tagName:string = "h1";

    constructor(greeting:string, tagName?:string){
        super(greeting);
        
        if(tagName !== undefined){
            this.tagName = tagName;
        }
    }

    greet(name:string) :string{
        return `<${this.tagName}>${this.greeting}, ${name}</${this.tagName}>`
    }

}

export {HTMLGreeter}