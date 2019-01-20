const ApiServiceDecorator = require('./ApiServiceDecorator')

class ErrorHandlerApiServiceDecorator extends ApiServiceDecorator {
	constructor (apiService, handleError) {
		super(apiService)
		this.handleError = handleError
	}

	runService () {
		const result = this.apiService.runService(this.route)

		if (result.status !== 200) {
			this.handleError(result)
		}
		return result
	}
}

module.exports = ErrorHandlerApiServiceDecorator
