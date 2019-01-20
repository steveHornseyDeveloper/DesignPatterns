const Obstacle = require('./Obstacle')
class PowerUp extends Obstacle {
	collision () {
		return 'Good stuff'
	}
}

module.exports = PowerUp
