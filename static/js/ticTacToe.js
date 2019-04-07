const allSquares = document.querySelector('#grid-container');
let xTurn = true;
// const squares = document.querySelectorAll('div.square');
let boardArr = [];
// winning combinations
const linesIds = [
    ['sq-0', 'sq-1', 'sq-2'],
    ['sq-3', 'sq-4', 'sq-5'],
    ['sq-6', 'sq-7', 'sq-8'],
    ['sq-0', 'sq-3', 'sq-6'],
    ['sq-1', 'sq-4', 'sq-7'],
    ['sq-2', 'sq-5', 'sq-8'],
    ['sq-0', 'sq-4', 'sq-8'],
    ['sq-2', 'sq-4', 'sq-6'],
];


const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// winner message
const winnerMessage = winner => {
  // show winning message
  console.log(`${winner} is the winner!`);

  // freeze gameboard so no more items click
  removeListener();

  // reset gameboard
  // reset();
};

// change box color for the three that match


// reset gameboard


// logic to select winner
function checkForWinner(boardArr, lines) {
  let winner;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(`winning trio ${a} ${b} ${c}`);

    if (boardArr[a] && boardArr[a] === boardArr[b] && boardArr[a] === boardArr[c]) {
      winner = boardArr[a];
      return  winnerMessage(winner);
    }
    // console.log(a);
  }
  return null;
}



// to till all spaces are full or three in a row

// hightlight whose turn in the DOM
const whoseTurn = () => {
    const teamO = document.getElementById('right');
    const teamX = document.getElementById('left');

  if(!xTurn) {
     teamX.classList.remove('picked');
     teamO.classList.add('picked');

  } else {
     teamX.classList.add('picked');
     teamO.classList.remove('picked');
  }
}

const addXO = (e) => {
    const squareId = e.target.id;
    const square = document.getElementById(squareId);

  // Add x or o to board
    let mark = xTurn ? 'X' : 'O' ;
    square.innerHTML = `<span class="xosign ${mark}">${mark}</span>`;



    boardArr.forEach(square => {
      if(squareId === square) {

        let match = boardArr.indexOf(square);
        boardArr.splice(match, 1, mark);
      }
    });

  // toggle turn
    xTurn = !xTurn;
  // highlight x or o in the DOM
    whoseTurn();
  // check for match
    checkForWinner(boardArr, lines);
}

const addListener =  () => {
  allSquares.addEventListener('click', addXO);
}

// Freeze the gameboard
const removeListener = () => {
  allSquares.removeEventListener('click', addXO);
}


// Make the game board
const gameBoard = (() => {
  const container = document.getElementById('grid-container');

  for(let i = 0; i < 9; i += 1) {
    const square = `<div class="square" id="sq-${i}"></div>`;

    boardArr.push(`sq-${i}`);
    container.innerHTML += square;
  }
  addListener();
})();

