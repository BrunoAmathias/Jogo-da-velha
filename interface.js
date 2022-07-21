document.addEventListener('DOMContentLoaded',()=>{
let squares = document.querySelectorAll(".square");

squares.forEach((square)=>{
    square.addEventListener('click', handleClick);
})
})


function handleClick (event){
    let square =event.target
    let postion =square.id
   if( handleMove(postion)){
       setTimeout (()=>{
        descobrindoJogador();
 alert("O jogo acabou, o vencedor foi o jogador " + player)
 

       }, 100);
      
   };
   
    updateSquares();
    
}

function descobrindoJogador(){
    if(playerTime == 0){
        player =  "X"
        contadorVitoriasX++
        paragrafoVitoriaX.innerHTML = "Vitórias X : " + contadorVitoriasX
    }if( playerTime == 1){
        player = "bolinha"
        contadorVitoriasO++
        paragrafoVitoriaO.innerHTML = "Vitórias O : " + contadorVitoriasO
    }
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

squares.forEach((square)=>{
    let postion =square.id;
    let symbol = board[postion];
    if(Symbol != ''){
        square.innerHTML = `<div class='${symbol}'></div>`
    }
})
}


let btn = document.querySelector(".btn")

btn.addEventListener('click', restart)

function restart(){
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.innerHTML = ""
    }) 
    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
}


    
