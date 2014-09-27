

requirejs.config({

  baseURL: "js",

  paths: {
      src:"./src"
  }
});

require(["Game"], function(Game) {

    var App = Game.extend({

      init: function() {
        canvas.width = 480;
        canvas.height = 272;
        canvas.scale = 1;

        content.load("back", "res/back.png")
        content.load("blocks", "res/blocks.png")
        content.load("numbers", "res/numbers.png")
      },

        tick: function(){
          if (content.progress() === 1) {
            canvas.ctx.drawImage(content.get("back"), 0, 0);
          }
        }
    });

   (function() {
        var game = new App();
        game.run();

    })();
});
