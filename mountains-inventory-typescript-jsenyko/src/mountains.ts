let fullName:string = "Jakob";

//an interface says "we are estblishing what a mountain is, and the properties it MUST have."
interface Mountain{
    name:string, 
    height:number,
    //the question mark after the hasBeenClimbed makes the trait optional
    hasBeenClimbed?:boolean;
}

//optional parameter
function Calculate(a:number, b:number, c?:number ){

}
//optional parameter
Calculate(1, 2);
Calculate(1, 2, 3);


//optional type
let stringOrNumber:string|null;

stringOrNumber = "Jonathan";

let newMountain:Mountain = {
    name: "kilimanjaro",
    height: 10000
}

let mountains:Mountain[] = [{name: "Kilimanjaro", height: 19341}, 
                            {name: "Everest", height: 29029}, 
                            {name: "Denali", height: 20310}];


// //we shoudl lways for the sake of practice, put what the type is goign to return, after writing the function. "number:"
// function Calculate(a:number, b:number, type:string) :void {

//     //function that returns 'void' dont return anything
    
// }

//this is a function signature
function findNameOfTallestMountain(mountains:Mountain[]) :string {
    
    let currentTallest = 0;
    let currentName = "";

    for(let mountain of mountains){
        currentTallest = mountain.height;
        currentName = mountain.name;
    }
    
    return currentName;

}

console.log(findNameOfTallestMountain(mountains));




export {findNameOfTallestMountain, Mountain};