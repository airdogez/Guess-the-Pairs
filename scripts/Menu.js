Menu = function(game) {
	this.backGround = null;
};

Menu.prototype = {
	preload:function() {

	},

	create:function() {
		this.backGround = this.add.sprite(0, 0, 'background');
	},
  };
