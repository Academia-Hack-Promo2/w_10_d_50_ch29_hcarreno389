'use strict';

var Player = (function () {

	var Player = function (name) {
		this.name = name;
		this.life = 5000;
	};

	Player.prototype.attack = function (player) {
		
		var att=this.typeAtack();
		console.log('ataco '+this.name);	
		console.log(att);
		console.log(att.damage());
		player.damage(att.damage());	
	};

	Player.prototype.damage = function (damage) {
		console.log('se jodio '+this.name);
		console.log('vida restante' + (this.life - damage));
		this.life -= damage;

	};

	Player.prototype.isDead = function () {
		return this.life <= 0;
	};

	Player.prototype.setFaction = function (faction) {
		this.faction = faction;
	};
	Player.prototype.typeAtack = function (){
		var i = Math.floor(Math.random()*3);
		var att = this.faction.attack();
		return att[i];
	}

	return Player;

})();
