class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const game = this.game;
    const $container = this.$el;
    const $grid = $(".grid")
    this.$el.on("click", "li", function(e) {
      const $listElement = $(e.target);
      // debugger
      // if space is empty, allow placing a move.
      if ($listElement.context.textContent === "") {
        $listElement.text(`${game.currentPlayer}`);
        $listElement.toggleClass(`${game.currentPlayer} unclicked`);
        game.playMove($listElement.data("pos"));
        // if the game is over and a tie, append "It's a draw"
        if (game.isOver() && game.board.winner()=== null) {
          $container.append("<h1>It's a draw!</h1>");
          // remove the event listener
          $container.off();
          // add a class that removes hover effect
          $grid.toggleClass(`game-over`);
        } else if (game.isOver() && game.board.winner()) {
          game.swapTurn();
          $container.append(`<h1>You win, ${game.currentPlayer}!</h1>`);
          // remove the event listener
          $container.off();
          $grid.toggleClass(`game-over unclicked`);
          const winnerLi = $(`.${game.currentPlayer}`);
          winnerLi.toggleClass(`winner`);
          const unclickedLi = $(`.unclicked`);
          unclickedLi.toggleClass('unclicked');
          
          // if ($li.context.textContent === game.currentPlayer) {
          // }
          // add a class that removes hover effect

        }
      } else {
        alert('Invalid move! Try again.');
      }
      
      // 
      // // we want to check if the game is over.

    });
  }

  makeMove($square) {}

  setupBoard() {
    const $grid = $("<ul></ul>");
    $grid.addClass("grid");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $test = $("<li></li>");
        $test.data("pos", [i, j]);
        $test.addClass("unclicked")
        $grid.append($test);
      }
    }
    this.$el.append($grid);
  }
}

module.exports = View;
