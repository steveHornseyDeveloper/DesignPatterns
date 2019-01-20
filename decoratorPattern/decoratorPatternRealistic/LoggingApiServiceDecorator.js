const apiServiceDecorator = require('./ApiServiceDecorator')

class LoggingApiServiceDecorator extends apiServiceDecorator {
	constructor (apiService, handleLog) {
		super(apiService)
		this.handleLog = handleLog
	}

	runService () {
    	this.handleLog(`Starting API call: ${this.route}`)
		const result = super.runService()
		this.handleLog(`Finished API call: ${this.route}`)

		return result
	}
}

module.exports = LoggingApiServiceDecorator
