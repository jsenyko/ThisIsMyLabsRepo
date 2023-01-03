import { HTMLGreeter } from "./html";

describe('HTML greeting tests', () => {

    test('the correct HTML greeting is given. greeting with certain tags surrounding it', ()=> {
        
        let htmlGreeting = new HTMLGreeter("hi", "h1")

        let tagGreet = htmlGreeting.greet("Steve");
        
        expect(tagGreet).toBe("<h1>hi, Steve</h1>")
    })

    
})