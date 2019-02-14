// Set up variables here

let valentineRudy = {
    id: "valentine-1",
    name: "Rudy",
    message: "It'd be rude not to say happy Valentine's Day!"
};
let valentinePom = {
    id: "valentine-2",
    name: "Pom",
    message: "You da POM! Happy Valentine's Day!"  
};
let valentineSchmitty = {
    id: "valentine-3",
    name: "Schmitty",
    message: "We're schmitten with you, our Valentine!"
};
let valentineArray = [valentineRudy, valentinePom, valentineSchmitty];
// Set up function setHTMLValentinesName here
function setHTMLValentinesName(valentine){
    let valentineHTML = document.getElementById(`${valentine.id}--name`);
    valentineHTML.innerHTML = valentine.name;
    // document.getElementById(`valentine-${n}--name`).innerHTML =(`${valentineArray[{n}].name}`); // does this work? n can go from 0-2 for all 3 valentines in the array

}
// Set up function setHTMLValentinesMessage here
function setHTMLValentinesMessage(valentine){
    let valentineHTML = document.getElementById(`${valentine.id}--message`);
    valentineHTML.innerHTML = valentine.message;
}
// function setHTMLValentinesName(valentine){
//     // document.getElementById(`${valentineArray[{n}].id}--name`).innerHTML =(`${valentineArray[{n}].message}`);
// }
// Set up function processValentines here
function processValentines(){
    n=0;
    while (n<valentineArray.length){
        valentine = valentineArray[n];
        setHTMLValentinesName(valentine);
        setHTMLValentinesMessage(valentine);
        n++;
    }
}
// Call process Valentines here
processValentines();


function allIn1(){
    let n = 0;
    let i = n+1;
    while (n<valentineArray.length) {
    document.getElementById(`valentine-${i}--name`).innerHTML = (`${valentineArray[n].name}`);
    document.getElementById(`valentine-${i}--message`).innerHTML = (`${valentineArray[n].message}`);
    n++;
    i++;
    }
}

allIn1();