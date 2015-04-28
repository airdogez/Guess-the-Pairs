Boost = function(game) {
  Global = {WIDTH:720, HEIGHT:480};
};

Boost.prototype = {
  preload:function() {
    this.load.image('loading', 'assets/loadingbar.png');
    this.load.image('background', 'assets/background.jpg');
  },

  create:function() {
    this.state.start('Preloader');
  },
};
