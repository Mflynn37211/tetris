define(function(){

  var Game = Class.extend({

    tick: function() {
      console.warn("should be overwritten by childclass!")
    },

    run: function() {

        var self = this;
        function loop() {
          self._reqframe = window.requestAnimationFrame(loop);

          self.tick();

          canvas.flip();
        }
        this._reqframe = window.requestAnimationFrame(loop);
    }
  });

  return Game;
});
