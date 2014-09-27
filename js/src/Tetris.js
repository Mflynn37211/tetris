

define(["Gameboard", "StatManager"], function(GameBoard, StatManager) {

  var Tetris = Class.extend({

      init: function() {
          this.gameBoard = new GameBoard();
          this.stat = new StatManager();
      },



      update: function(inpt) {


        }
      },

      draw: function(ctx) {
       this.gameBoard.draw(ctx, this.stat);
      }
  });

  return Tetris;

});
