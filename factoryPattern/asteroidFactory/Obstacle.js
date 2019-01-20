class Obstacle {
	constructor (size, xVelocity, yVelocity) {
		this.size = size
		this.xVelocity = xVelocity
		this.yVelocity = yVelocity

		this.xStart = generateRandomNumber1to100()
		this.yStart = generateRandomNumber1to100()
	}
}

function generateRandomNumber1to100 () {
	return Math.random() * 100
}

module.exports = Obstacle
