

define([
         "Gameboard",
         "StatManager",
         "Tetramino",
         "Block"
  ], function(GameBoard, StatManager, Tetramino, Block) {

  var Tetris = Class.extend({

      init: function(cols, rows) {

          this.cols = cols;
          this.rows = rows ;
          this.gameBoard = new GameBoard();
          this.stat = new StatManager();
          this.blockControl = [];

          var tet = new Tetramino(Tetramino.Z);

          this.reset();

      },

      reset: function() {

        this.blockControl = [];
        for (var i = 0; i < this.cols; i++) {
            this.blockControl[i] = [];
            for (var j = 0; j < this.rows; j++) {
              this.blockControl[i][j] = new Block();
            }
        }
      },

      update: function(inpt) {

      },

      draw: function(ctx) {
       this.gameBoard.draw(ctx, this.stat);


          for (var i = 0; i < this.cols; i++) {
              for (var j = 0; j < this.rows; j++) {
                  var b = thi.blockControl[i][j];
                  if (b.solid) {
                    this.gameBoard.drawBlock(ctx, b, i, j);
                }
              }
          }
      }
  });

  return Tetris;

});


