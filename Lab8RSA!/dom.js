function main(){
let paragraph = document.querySelector("#grow-me")

paragraph.classList.add("big");

console.log(paragraph);

//////#2////

let shrinky = document.getElementById("shrink-me");

shrinky.classList.remove("big");

console.log(shrinky);

////#3////

let listen = document.querySelectorAll("li");

console.log(listen);

///#4///

// let linkAdjust = document.querySelector(".link");

// linkAdjust.classList.replace("somewhere")

////#5////

let hidepara = document.getElementById("hide-me")

hidepara.style.display = "none";

}

//#6//

let showpara = document.getElementById("show-me")

showpara.style.display = "block";

//#7//

let welcomeMessage = document.querySelector("#name")

welcomeMessage.innerHTML = "Welcome Grant!"