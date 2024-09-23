let gameSeq = [];
let userSeq = [];
let line = document.querySelector("p");
let h3 = document.querySelector("h3");
let btns = ["red","blue","green","yellow"]
let start = false;
document.addEventListener("keypress" , function(){
    start = true;
    levelUp();
})
let level = 0;
function btnFlash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(function() {
        randbtn.classList.remove("flash")
    }, 200);
}
function levelUp(){
    userSeq=[];
    level++;
    line.innerText = `Level no ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randclr = btns[randIdx];
    let randbtn=document.querySelector(`.${randclr}`)
    gameSeq.push(randclr);
    console.log(gameSeq);
    btnFlash(randbtn);
}


function checkbtn(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,300);
       }
    }
    else{
        line.innerHTML = `Press Enter to Restart! <br> Your Score is <b>${level-1}</b>`;
        h3.innerText = "Game Over!"
        reset();
    }
}

function btnPress(){
    // console.log(this)
    let btn = this;
    btnFlash(btn);
    let userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    console.log(userSeq);
    checkbtn(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for(let btn of allBtns){
    btn.addEventListener("click",btnPress)
    
}

function reset(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level = 0;

}