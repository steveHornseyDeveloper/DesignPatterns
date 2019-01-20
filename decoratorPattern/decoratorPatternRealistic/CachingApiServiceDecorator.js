const ApiServiceDecorator = require('./ApiServiceDecorator')

class CachingApiServiceDecorator extends ApiServiceDecorator {
	constructor (apiService) {
		super(apiService)
		this.cache = {

		}
	}

	runService (route) {
		// This is a poor example because order matters.
		// Cached calls prevent other decorators from being called

    	let result
    	if (!this.cache[route]) {
    		result = super.runService()
    		this.cache[route] = result
    		} else {
    		result = this.cache[route]
    	}
    	return result
	}
}

module.exports = CachingApiServiceDecorator
