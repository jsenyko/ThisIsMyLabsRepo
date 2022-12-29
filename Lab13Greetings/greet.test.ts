import { Greeter } from "./greet";
import { JsGreeter } from "./JSgreeter";

describe('greeting tests', () => {

    test('proper greeting is given. greeting then name', ()=> {
        
        let theGreeting = new Greeter("hi")
        
        expect(theGreeting.greeting).toBe("hi")
    })

     test('greeting appears correctly', ()=> {

         let theGreeting = new Greeter("hello")

         expect(theGreeting.greeting).toBe("hello")

     })

     test('greeting appears correctly', ()=> {

        let theGreeting = new Greeter("hello")

        let wholeGreeting = theGreeting.greet("Jakob")

        expect(wholeGreeting).toBe("hello, Jakob!")

    })
})