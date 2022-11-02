//#1//
let submissions = [{name: "Jane", score: 95, date: 01/24/2020, passed: true},
                    {name: "Joe", score: 77, date: 05/14/2018, passed: true},
                    {name: "Jack", score: 59, date: 07/05/2019, passed: false},
                    {name: "Jill", score: 88, date: 04/22/2022, passed: true}
                    ];


//#2//
function addSubmission(array, newName, newScore, newDate){
    //1)check to see if they passed or failed. 2)create an object. 3)push to my submissions
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
    }
    //could've used an if statement here
    newSubmission >= 60 ? newSubmission.passed = true : newSubmission.passed = false;

    array.push(newSubmission);
    console.log(array);
    
}

addSubmission(submissions, "Sally", 40, "2020-01-01");