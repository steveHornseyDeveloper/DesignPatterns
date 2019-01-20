const Obstacle = require('./Obstacle')

class Asteroid extends Obstacle {
	collision () {
		return 'Good stuff'
	}
}

module.exports = Asteroid
