

requirejs.config({

  baseURL: "js",

  paths: {
      src:"./src"
  }
});

require(["Game", "Tetris"], function(Game, Tetris) {

    var App = Game.extend({

      init: function() {
        canvas.width = 480;
        canvas.height = 272;
        canvas.scale = 1;

        content.load("back", "res/back.png")
        content.load("blocks", "res/blocks.png")
        content.load("numbers", "res/numbers.png")

       this.hasload = false;

      },

        tick: function(){

          if (this.hasload) {

              this.tetris.handleInputs(input);
              this.tetris.update();
              this.tetris.draw(canvas.ctx)


          } else {

              this.hasload = content.progress() === 1;

              if (this.hasload) {
                  this.tetris = new Tetris();
              }
          }
        }
    });

   (function() {
        var game = new App();
        game.run();

        window.onblur = game.stop.bind(game);
        window.onfocus = game.run.bind(game);

    })();
});
