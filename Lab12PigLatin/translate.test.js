let translate = require('./translate');

//descirbe is strictly here for organization. It does not have any important functionality
describe('The typed words will become PigLatin', () =>{
    
    test("starts with a", () => {
        expect(translate("apple")).toEqual("appleway");
    });

    test("starts with e", () => {
        expect(translate("extra")).toEqual("extraway");
    });

    test("starts with i", () => {
        expect(translate("igloo")).toEqual("iglooway");
    });

    test("starts with o", () => {
        expect(translate("over")).toEqual("overway");
    });

    test("starts with u", () => {
        expect(translate("umbrella")).toEqual("umbrellaway");
    });

    test("starts with t", () =>{
        expect(translate("top")).toEqual("optay");
    });

    test("starts with d", () => {
        expect(translate("dove")).toEqual("oveday");
    });

    test("starts with tr", () =>{
        expect(translate("truck")).toEqual("ucktray")
    })

    test("starts with str", () =>{
        expect(translate("string")).toEqual("ingstray")
    })

    test("to be lower case", () => {
        expect(translate("yikes")).toEqual(translate("yikes").toLowerCase());
    });
    
})