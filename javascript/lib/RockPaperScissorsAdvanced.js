//define class player
function Player(name) {
  this.name = name;
}
//define method picks
Player.prototype.picks = function(pick) {
	this.pick = new Pick(player.pick);
}
//define class game
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

//define constant of class Game
Pick.prototype.PAIRS = {
    'rock':     { 'beats': ['scissors', 'lizard']},
    'paper':    { 'beats': ['rock', 'spock']},
    'scissors': { 'beats': ['paper', 'lizard']},
    'lizard':   { 'beats': ['spock', 'paper']},
    'spock':    { 'rock': 'vaporizes', 'scissors': 'melts'}
}

Pick.prototype.beats = function(otherPick){
  var veb = this.PAIRS[this.name][otherPick.name];

  if (veb){
    return[this.name, veb, otherPick.name].join( );
    else{
    return false;

  }
}

//define method winner
Game.prototype.winner = function() {
  var p1Win = this.player1.pick.beats(this.player1.pick);
  var p2Win = this.player2.pick.beats(this.player2.pick);

  if (p1Win) return p1Win;
  if (p2Win) return p2Win;
  
  return 'draw';
}
//define method samePick
Game.prototype.samePick = function() {
	return this.player1.pick === this.player2.pick{
}

function Pick(name){
  this.name = name;
}