class ApiService {
	constructor () {
		this.baseRoute = 'https://myServer/api/'
	}
	runService (route) {
		return {
			status: 200,
			result: 'important info!'
		}
	}
}

module.exports = ApiService
