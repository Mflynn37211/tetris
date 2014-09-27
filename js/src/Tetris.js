

define(["Gameboard", "StatManager"], function(GameBoard, StatManager) {

  var Tetris = Class.extend({

      init: function() {
          this.gameBoard = new GameBoard();
          this.stat = new StatManager();
      },

      handleInputs: function(inpt) {
        },

      update: function() {

      },

      draw: function(ctx) {
       this.gameBoard.draw(ctx, this.stat);
      }
  });

  return Tetris;

});
