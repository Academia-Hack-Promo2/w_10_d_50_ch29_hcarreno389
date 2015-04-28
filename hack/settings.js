"use strict";

var settings = (function () {

	var attack1 = new Attack('dragon punch', 20);
	var attack2 = new Attack('bruce lee kick', 50);
	var attack3 = new Attack('chuck norris stare', 1500);

	var ninja = new Faction('ninja');

	ninja.addAttack(attack1);
	ninja.addAttack(attack2);
	ninja.addAttack(attack3);

	var attack0 = new Attack('no attack', 0);
	var attack4 = new Attack('bite', 500);
	var attack5 = new Attack('step', 1000);
	var attack6 = new Attack('tail whipe', 500);

	var dinosaur = new Faction('dinosaur');

	dinosaur.addAttack(attack0);
	dinosaur.addAttack(attack4);
	dinosaur.addAttack(attack5);
	dinosaur.addAttack(attack6);

	return {
		factions: [ninja, dinosaur]
	};

})();