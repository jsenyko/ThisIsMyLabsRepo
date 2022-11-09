let hideNums = document.getElementById("1to10")
//.display's default value is block
hideNums.style.display = "none";

let hideLett = document.getElementById("AtoZ")
///style.display = "block" for the eventListener part? 
///use the eventListeners on the links, wait for a click??


let dropDownSelect = document.getElementById("DropNum");

dropDownSelect.addEventListener('click', dropDownClicked);

function dropDownClicked(){
    hideLett.style.display = "none";
    hideNums.style.display = "block";
}

let dropDown2ndSelect = document.getElementById("DropLet");

dropDown2ndSelect.addEventListener('click', lettersClicked)

function lettersClicked(){
    hideLett.style.display = "block";
    hideNums.style.display = "none";
}