let squares = document.querySelectorAll(".square");

document.addEventListener('DOMContentLoaded', () => {
  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
});

function handleClick(event){
  if(handleMove(event.target.id)){
    let player = playerTime == 0 ? 'Escudo' : 'Espada'  
    setTimeout(() => {
      alert(`O jogo acabou! - O jogador ${player} venceu!`)
      resetGame();
    }, 300);
    
  }
  updateSquare(event.target.id);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}