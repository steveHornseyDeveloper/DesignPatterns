const apiService = require('./apiService')
const errorHandlerApiServiceDecorator = require('./errorHandlerApiServiceDecorator')
const loggingApiServiceDecorator = require('./loggingApiServiceDecorator')

describe('decorator pattern functional', function () {
	it('e2e', function () {
		const route = 'route'
		const errorHandler = jest.fn()
		const logHandler = jest.fn()

		const apiServiceCall = apiService()

		const errorHandledServiceCall = errorHandlerApiServiceDecorator(apiServiceCall, errorHandler)
		const loggedServiceCall = loggingApiServiceDecorator(errorHandledServiceCall, logHandler)

		loggedServiceCall(route)

		expect(errorHandler.mock.calls.length).toBe(0)
		expect(logHandler.mock.calls.length).toBe(2)
	})
})
