import {Loud} from "./loud";

describe('Loud greeting tests', () => {

    test('the correct Loud greeting is given. greeting with more exclamation points', ()=> {
        
        let loudGreeting = new Loud("hi", "!")

        let LoudGreet = loudGreeting.greet("Kevin");
        
        expect(LoudGreet).toBe("hi, Kevin !!")
    })

    test('the correct Loud greeting is given. greeting with more exclamation points', ()=> {
        
        let loudGreeting = new Loud("hey", "!")

        let LoudGreet = loudGreeting.greet("Kevin");
        
        expect(LoudGreet).toBe("hey, Kevin !!")

        loudGreeting.addVolume();

        LoudGreet = loudGreeting.greet("Kevin")

        expect(LoudGreet).toBe("hey, Kevin !!!")
    })



})