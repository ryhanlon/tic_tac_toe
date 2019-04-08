 let boardArr = [];
// const allSquares = document.querySelector('#grid-container');
let xTurn = true;

/* =========== Model =========== */
const model = {

  // winning combinations by index with ids
  linesIds: [
    ['sq-0', 'sq-1', 'sq-2'],
    ['sq-3', 'sq-4', 'sq-5'],
    ['sq-6', 'sq-7', 'sq-8'],
    ['sq-0', 'sq-3', 'sq-6'],
    ['sq-1', 'sq-4', 'sq-7'],
    ['sq-2', 'sq-5', 'sq-8'],
    ['sq-0', 'sq-4', 'sq-8'],
    ['sq-2', 'sq-4', 'sq-6'],
    ],

  // winning combinations by index
  lines: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]

}

/* =========== Dragon =========== */
const dragon = {
  init: () => {
    view.init();
  },

  getLinesIds: () => model.linesId,

  getLines: () => model.lines,

  // change box color for the three that match

  // freeze gameboard so no more items click

  // reset gameboard

  // winner message
  winnerMessage: winner => {
  console.log(`${winner} is the winner!`);
  removeListener();
  },

  // logic to select winner
  checkForWinner: function(boardArr, lines) {
    let winner;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(`winning trio ${a} ${b} ${c}`);

      if (boardArr[a] && boardArr[a] === boardArr[b] &&
          boardArr[a] === boardArr[c]) {

          winner = boardArr[a];
          return  this.winnerMessage(winner);
      }
      console.log(a);
    }
    return null;
  }


}




// const addListener =  () => {
//   allSquares.addEventListener('click', addXO);
// }

// const removeListener = () => {
//   allSquares.removeEventListener('click', addXO);
// }


/* =========== View =========== */
const view = {
  init: function() {
    this.allSquares = document.querySelector('#grid-container');
    this.renderGameBoard();
    this.allSquares.addEventListener('click', this.addXO);
    this.dragon.getLinesIds();
    this.dragon.getLines();
  },

  // Make the game board
  renderGameBoard: () => {
    console.log('hey render gameboard');
    this.gameBoardContainer = document.getElementById('grid-container');

    for(let i = 0; i < 9; i += 1) {
      const square = `<div class="square" id="sq-${i}"></div>`;

      boardArr.push(`sq-${i}`);
      this.gameBoardContainer.innerHTML += square;
    }

  },

    // choose X or O
    addXO: function(e) {
      console.log('click me');
      const squareId = e.target.id;
      const square = document.getElementById(squareId);

      // Add x or o to board
      let mark = xTurn ? 'X' : 'O' ;
      square.innerHTML = `<span class="xosign ${mark}">${mark}</span>`;

      boardArr.forEach(square => {
        if(squareId === square) {

          let match = boardArr.indexOf(square);
          boardArr.splice(this.match, 1, mark);
      }
    });

      // toggle turn
        xTurn = !xTurn;
      // highlight x or o in the DOM

        this.whoseTurn();
      // check for match
        this.dragon.checkForWinner(boardArr, lines);
  },

    // hightlight whose turn in the DOM
    whoseTurn: function() {
      console.log('whose turn is clicked');
//       this.teamO = document.getElementById('right');
//       this.teamX = document.getElementById('left');

//     if(!xTurn) {
//        this.teamX.classList.remove('picked');
//        this.teamO.classList.add('picked');

//     } else {
//        this.teamX.classList.add('picked');
//        this.teamO.classList.remove('picked');
//     }
  }



}

dragon.init();
