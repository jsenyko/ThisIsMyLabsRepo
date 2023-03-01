//#1//
let submissions = [{name: "Jane", score: 95, date: "01/24/2020", passed: true},
                    {name: "Joe", score: 77, date: "05/14/2018", passed: true},
                    {name: "Jack", score: 59, date: "07/05/2019", passed: false},
                    {name: "Jill", score: 88, date: "04/22/2022", passed: true}
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

//addSubmission(submissions, "Sally", 40, "2020-01-01");



////#3////

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    console.log(array);
}
//deleteSubmissionByIndex(submissions, 1);


/////#4////

// function deleteSubmissionByName(array, name) {
//     let indexOfObject = array.findIndex(object) => {
//         return object.name === name;
//     }
// }
// array.splice(indexOfObject, 1);

///#5////

function editsubmission(array, index, score){
    let newScore = array[index].score = score;
    newScore >= 60 ? array[index].passed = true : array[index].passed = false;
    return array;
}

///#6////

function findSubmissionByName(array, name) {
    let find = array.find((array) => {
        return array.name === name;
    });
    console.log(find);
}

///#7///

function findLowestScore(array){
    array.forEach((x) => {
        if(x.score < lowest.score){
            lowest = x;
        }
    })
    return lowest;
}

//#8//

function findAverageScore(array){
    let avgScore = 0; clearInterval;
    for(x of array){
        avgScore += x.score;
    }
    return x / submissions.length
}

//#9//

 function filterPassing(array){
   return array.filter((x) => {
       return x.passed;
    });
 }

  function filterPassing(array){
      return array.filter((value) => {
         return value.passed;
      });
}
console.log(filterPassing(submissions))

//#10//

 function filter90AndAbove(array){
     let find = array.filter(function (submissions){
         return submissions.score >= 90;
     })

     return find;
 }

//console.log(filter90AndAbove(submissions))