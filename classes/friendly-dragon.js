const Dragon = require("./dragon");

class FriendlyDragon {
    constructor(name, color, lifeGoals, friend) {
        super (name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        
    }
}


module.exports = FriendlyDragon