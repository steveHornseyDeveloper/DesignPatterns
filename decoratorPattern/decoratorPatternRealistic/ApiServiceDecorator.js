class ApiServiceDecorator {
	constructor (apiService) {
		this.apiService = apiService
	}

	runService (route) {
		return this.apiService.runService(route)
	}
}

module.exports = ApiServiceDecorator
