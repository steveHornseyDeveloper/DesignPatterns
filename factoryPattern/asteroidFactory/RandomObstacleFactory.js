const ObstacleFactory = require('./ObstacleFactory')
const Android = require('./Asteroid')
const PowerUp = require('./PowerUp')

class RandomObstacleFactory extends ObstacleFactory {
	generateObstacle () {
		if (generateRandomNumber1to100() + (this.difficutly * 3) > 100) {
			return this.generatePowerUp()
		} else {
			return this.generateAsteroid()
		}
	}

	generateAsteroid () {
		return new Android(someCleverScalingRandomNumberGenerator(), someCleverScalingRandomNumberGenerator(), someCleverScalingRandomNumberGenerator())
	}

	generatePowerUp () {
		return new PowerUp(1, someCleverScalingRandomNumberGenerator(), someCleverScalingRandomNumberGenerator())
	}
}

// TODO: to allow for unit testing the randomness should be dependency injected into the class
function generateRandomNumber1to100 () {
	return Math.random() * 100
}

function someCleverScalingRandomNumberGenerator () {
	// Combination of level and difficulty to return a scaling random number
	return Math.random() * 100
}

module.exports = RandomObstacleFactory
