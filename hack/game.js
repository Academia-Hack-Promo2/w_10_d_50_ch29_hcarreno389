'use strict';


(function () {
	
	var player1 = new Player('jonathan');
	var player2 = new Player('hector');

	player1.setFaction(settings.factions[1]);
	player2.setFaction(settings.factions[0]);

	console.log(player1);
	console.log(player2);

	while (!player2.isDead() && !player1.isDead()) {				
		player1.attack(player2);
		player2.attack(player1);
	};

})();