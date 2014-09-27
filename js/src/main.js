

requirejs.config({

  baseURL: "js",

  paths: {
      src:"./src"
  }
});

require(["Game"], function(Game) {

    var App = Game.extend({

      init: function() {
        canvas.width = 200;
        canvas.height = 100;
        canvas.scale = 2;

        content.load("back", "res/back.png")
        content.load("blocks", "res/blocks.png")
        content.load("numbers", "res/numbers.png")
      }
    });

   (function() {
        var game = new App();
        game.run();

    })();
});
