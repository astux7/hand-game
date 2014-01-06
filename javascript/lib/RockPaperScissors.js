//define class player
function Player(name) {
  this.name = name;
  // console.log("New player created")
}
//define method picks
Player.prototype.picks = function(pick) {
	this.pick = pick;
	//console.log("I am here");
}
//define class game
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

//define constant of class Game
Game.prototype.PAIRS = {
    'rock':     { 'beats': 'scissors' },
    'paper':    { 'beats': 'rock' },
    'scissors': { 'beats': 'paper' }
}

//define method winner
Game.prototype.winner = function() {
  if(this.samePick()){
    return null
  }
  if (this.PAIRS[this.player1.pick]['beats'] === this.player2.pick) {
    return this.player1
  }
  return this.player2
}
//define method samePick
Game.prototype.samePick = function() {
	if (this.player1.pick === this.player2.pick){
		return true;
	}
	return false;
}