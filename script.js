console.log("from javascript file");

// const candidateScore = document.getElementById("score");
// const trigger = document.getElementById("button");
// trigger.addEventListener("click", ()=> console.log("my button", candidateScore.value));
// console.log("this is score", candidateScore.value);


const principalInput = document.getElementById("principal");
const  rateInput= document.getElementById("rate");
const timeInput = document.getElementById("time");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => {
    let result = principalInput.value * timeInput.value
 * rateInput.value/100
    console.log(result)
})