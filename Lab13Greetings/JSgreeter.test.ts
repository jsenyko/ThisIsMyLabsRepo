import { JsGreeter } from "./JSgreeter";

describe('JS greeting tests', () => {

    test('proper JS greeting is given. greeting then name', ()=> {
        
        let theJSgreeting = new JsGreeter("hi")

        let JavaGreet = theJSgreeting.greet("Frank");
        //"console.log" + "(" + this.greeting + name + "!)";
        expect(JavaGreet).toBe("console.log(hi, Frank!)")
    })



})