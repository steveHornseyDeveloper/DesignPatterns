const defaultFlyStrategy = require('./strategies/flyStrategies/defaultFlyerStrategy')
const defaultDisplayStrategy = require('./strategies/displayStrategies/defaultDisplayStrategy')

class Duck {
	constructor ({ flyStrategy = defaultFlyStrategy, displayStrategy = defaultDisplayStrategy }) {
		this.fly = flyStrategy
		this.display = displayStrategy
	}
}

module.exports = Duck
