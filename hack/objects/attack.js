'use strict';

var Attack = (function () {

	var Attack = function (name, maxDamage) {
		this.name = name;
		this.maxDamage = maxDamage;
	};

	Attack.prototype.damage = function () {
		return Math.floor(Math.random() * (this.maxDamage));
	};

	return Attack;
})();