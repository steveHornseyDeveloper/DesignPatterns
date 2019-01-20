const Android = require('./Asteroid')
const PowerUp = require('./PowerUp')

class IncrementalObstacleFactory {
	constructor (difficulty, level) {
		this.difficulty = difficulty
		this.level = level

		this._counter = 0
	}

	generateObstacle () {
		this._counter++

		if (this._counter % 5 === 0) {
			return this.generatePowerUp()
		} else {
			return this.generateAsteroid()
		}
	}

	generateAsteroid () {
		return new Android(this.level + this.difficulty, this.level, this.level)
	}

	generatePowerUp () {
		return new PowerUp(1, this.level, this.level)
	}
}

module.exports = IncrementalObstacleFactory
