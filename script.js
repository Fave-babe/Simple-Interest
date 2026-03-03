console.log("from javascript file");

// const candidateScore = document.getElementById("score");
// const trigger = document.getElementById("button");
// trigger.addEventListener("click", ()=> console.log("my button", candidateScore.value));
// console.log("this is score", candidateScore.value);


 const principalInput  = document.getElementById("principal");
const  rateInput= document.getElementById("rate");
 const timeInput = document.getElementById("time");
const calculateButton = document.getElementById("calculateButton");


calculateButton.addEventListener("click", () => {

let p = Number(principalInput.value);
let r = Number(rateInput.value/100);
let t = Number(timeInput.value)
let interest = p * r * t

    let totalAmount = interest + p
    console.log( totalAmount)
    
    document.write(totalAmount)
    
})