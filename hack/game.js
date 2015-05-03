'use strict';


(function () {
	var player1;
	var player2;
	var play = $('#jugar');
	var pj1 = $('#pj1');
	var pj2 = $('#pj2'); 
	var valor;
	var valor2;
	$('select#faction1').on('change',function(){
		valor = $(this).val();
	});
	$('select#faction2').on('change',function(){
		valor2 = $(this).val();
	}); 
	pj1.click(function(){
		var nompl1 = $('#player1Name').val();
		player1 = new Player(nompl1);
		player1.setFaction(settings.factions[valor]);
		console.log(player1);
	});
	pj2.click(function(){
		var nompl2 = $('#player2Name').val();
		player2 = new Player(nompl2);
		player2.setFaction(settings.factions[valor2]);
		console.log(player2);
	});
	play.click(function(){
		while (!player2.isDead() && !player1.isDead()) {				
			player1.attack(player2);
			if (player2.isDead()) {
				alert("Game Over\n\t" + player2.name + " You are dead\n\t" + player1.name + 'You Win');
				return;
			};
			player2.attack(player1);
			if (player1.isDead()) {
				alert("Game Over\n\t" + player1.name + " You are dead\n\t" + player2.name + 'You Win');
				return;
			};
		};
	});
})();

