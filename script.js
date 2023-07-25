
let audioTurn =new Audio("button-41.mp3")
let gameover =new Audio("gameover.mp3")
let turn="X"
let Gameover=false;

// Function to change the turn
const changeTurn=()=>{
    return turn === "X" ? "0" :"X"
}

//function to check for win
const checkWin =()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach(e=>{
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
        document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " Won";
        Gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
    }
  })
}

//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!Gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

//Add onclick listener to reset button

reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
   turn ="X";
   Gameover=false
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px" 
   
})
