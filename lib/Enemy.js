const Potion = require('./Potion');
const Character = require('./Character');

/*function Enemy(name, weapon) {
    //this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    //this.health = Math.floor(Math.random() * 10 + 85);
    //this.strength = Math.floor(Math.random() * 5 + 5);
    //this.agility = Math.floor(Math.random() * 5 + 5);
};

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
}*/

class Enemy extends Character {
  constructor(name, weapon) {
    super(name); 
    //this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    //this.health = Math.floor(Math.random() * 10 + 85);
    //this.strength = Math.floor(Math.random() * 5 + 5);
    //this.agility = Math.floor(Math.random() * 5 + 5);
  }

  reduceHealth(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  }
  
  getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
  
}

module.exports = Enemy;