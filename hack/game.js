'use strict';


(function () {
	var btn = $('#jugar');
	btn.click(function(){
		var nompl1 = $('#player1Name').val();
		var nompl2 = $('#player2Name').val();
		var player1 = new Player(nompl1);
		var player2 = new Player(nompl2);
		
		var player1Fact = $('#1').id;
		console.log(player1Fact);		
	

	// player1.setFaction(settings.factions[1]);
	// player2.setFaction(settings.factions[0]);

	console.log(player1);
	console.log(player2);


		// while (!player2.isDead() && !player1.isDead()) {				
		// player1.attack(player2);
		//  	player2.attack(player1);
		//  };
	});		
	

	

})();