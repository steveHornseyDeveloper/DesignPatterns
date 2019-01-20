const IncrementalObstacleFactory = require('./IncrementalObstacleFactory')
const RandomObstacleFactory = require('./RandomObstacleFactory')

function runGame (settings) {
	var obsticleFactory = generateObsticleFactory(settings)

	var obsticles = []
	obsticles.push(obsticleFactory.generateObstacle())

	// Other game code
}

function generateObsticleFactory (settings) {
	var ObsticleFactory = settings.chaoticMode ? RandomObstacleFactory : IncrementalObstacleFactory

	return new ObsticleFactory(settings.difficuly, 1)
}

module.exports = runGame
