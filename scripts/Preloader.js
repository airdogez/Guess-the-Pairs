Preloader = function(game) {
  this.preloadBar = null;
  this.backGround = null;
};

Preloader.prototype = {
  preload:function() {
    this.backGround = this.add.sprite(0, 0, 'background');
    this.preloadBar = this.add.sprite(0, 0, 'loading');
    this.preloadBar.x = (Global.WIDTH - this.preloadBar.width) / 2;
    this.preloadBar.y = (Global.HEIGHT - this.preloadBar.height) / 2;
    this.load.setPreloadSprite(this.preloadBar);
    /*
     Imagenes a cargar
     */
  },

  create:function() {
    this.state.start('Menu');
  },
};
