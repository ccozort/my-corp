let myName = "Chris";
console.log(myName);

// this function logs a line of text in the browser
console.log("hello world!");

// 
function init(){
    changeHeading();
    greeting();
}

function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2');
    myHeading.textContent = 'Hello world!';
}

let greetingPrefix = "Hello there, ";

function greeting(){
    const para = document.createElement("p");
    para.innerText = greetingPrefix + myName;
    document.body.appendChild(para);

}