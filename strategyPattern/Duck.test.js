const highFlyerStrategy = require('./strategies/flyStrategies/highFlyerStrategy')
const defaultFlyStrategy = require('./strategies/flyStrategies/defaultFlyerStrategy')
const noFlyStrategy = require('./strategies/flyStrategies/noFlyerStrategy')
const prettyDisplayStrategy = require('./strategies/displayStrategies/prettyDisplayStrategy')
const defaultDisplayStrategy = require('./strategies/displayStrategies/defaultDisplayStrategy')
const Duck = require('./Duck')

describe('Duck', function () {
	it('Takes a flight ability', function () {
		var migratoryDuck = new Duck({ flyStrategy: highFlyerStrategy })

		expect(migratoryDuck.fly).toBe(highFlyerStrategy)
	})
	it('Gains flight ability', function () {
		var rubberDuck = new Duck({ flyStrategy: noFlyStrategy })

		expect(rubberDuck.fly()).toBe('I can fall with style!')
	})

	it('uses default flight ability when undefined', function () {
		var regularDuck = new Duck({ })

		expect(regularDuck.fly).toBe(defaultFlyStrategy)
	})

	it('Gains a display ability', function () {
		var prettyDuck = new Duck({ displayStrategy: prettyDisplayStrategy })

		expect(prettyDuck.display).toBe(prettyDisplayStrategy)
	})
	it('uses default display ability when undefined', function () {
		var regularDuck = new Duck({ })

		expect(regularDuck.display).toBe(defaultDisplayStrategy)
	})
})
