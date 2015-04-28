Menu = function(game) {
  this.backGround = null;
  this.startButton = null;
  this.instructionsButton = null;
  this.fontText = null;
  this.fontInstructions= null;
  this.startText = null;
  this.instructionsText = null;
};

Menu.prototype = {
  preload:function() {

  },

  create:function() {
    this.backGround = this.add.sprite(0, 0, 'background');
    this.fontText = { font: "40px Arial", fill: "#FFAA44", align: "center"};
    this.fontInstructions = { font: "30px Arial", fill: "#FFaa44", align: "center"};
    this.startButton = this.add.button(0,0,'buttons',this.startGame,this,2,1,0);
    this.instructionsButton = this.add.button(0,0,'buttons',this.instructions,this,2,1,0);
    this.startButton.x = (Global.WIDTH - this.startButton.width)/2;
    this.startButton.y = Global.HEIGHT - (2*this.startButton.height) - 100;
    this.instructionsButton.x = (Global.WIDTH - this.instructionsButton.width)/2;
    this.instructionsButton.y = Global.HEIGHT - (this.instructionsButton.height)- 50;
    this.startText = this.add.text(0,0,"Start",this.fontText);
    this.instructionsText = this.add.text(0,0,"Instructions", this.fontInstructions);
    this.startText.x = this.startButton.x + (this.startButton.width/4);
    this.startText.y = this.startButton.y;
    this.instructionsText.x = this.instructionsButton.x+20;
    this.instructionsText.y = this.instructionsButton.y+5;

  },
  startGame:function(){
    this.state.start('Game');
  },
  instructions:function(){
    this.state.start('Instructions');
  }
};
