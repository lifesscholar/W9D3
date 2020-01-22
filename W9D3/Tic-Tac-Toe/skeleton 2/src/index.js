window.View = require("./ttt-view");
window.Game = require("./game");

  $(() => {
    // Your code here
    const game = new Game();
    const view = new View(game, $(".ttt"));
    view.bindEvents();
    // $grid = $(".ttt");
  });
