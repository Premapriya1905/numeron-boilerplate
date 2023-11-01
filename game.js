// Iteration 2: Generate 2 random number and display it on the screen
const gen1=document.getElementById("number1");
const gen2=document.getElementById("number2");
var num1=Math.floor(Math.random() * 101);
var num2=Math.floor(Math.random() * 101);
gen1.innerHTML =num1 ;
gen2.innerHTML=num2;
// Iteration 3: Make the options button functional
var greaterbtn=document.getElementById("greater-than")
var lesserbtn=document.getElementById("lesser-than")
var equalbtn=document.getElementById("equal-to")
var time_interval;
const randomNumbers = () => {
    if(time_interval){
        clearInterval(time_interval);
    }


    num1=Math.floor(Math.random() * 101);
    num2=Math.floor(Math.random() * 101);
    gen1.innerHTML =num1;
    gen2.innerHTML=num2;

    count = 6;
    time_interval = setInterval(time, 1000);
}
randomNumbers()

var score=0;
var count = 6; 
function score_update(){
    localStorage.setItem("score", score);
    window.location.href = "./gameover.html";
}

greaterbtn.addEventListener("click" , ()=> {
    if(num1>num2){
        score++
        randomNumbers()
    }else {
        score_update()
    }
    
})

lesserbtn.addEventListener("click",()=> {
    if(num1<num2){
        score++
        randomNumbers()
    }else{
        score_update()
    }
})

equalbtn.addEventListener("click",()=>{
    if(num1==num2){
        score++
        randomNumbers()
    }else{
        score_update()
    }
})

// Iteration 4: Build a timer for the game
var count = 6;
var timer =document.getElementById("timer")
function time(){
    if (count > 0){
        count--;
        timer.innerHTML = count;
    }else{
        window.location.href = "gameover.html";
    }
}
