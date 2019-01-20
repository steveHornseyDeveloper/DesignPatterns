const ApiService = require('./ApiService')
const ErrorHandlerApiServiceDecorator = require('./ErrorHandlerApiServiceDecorator')
const LoggingApiServiceDecorator = require('./LoggingApiServiceDecorator')

describe('decorator pattern realistic test', function () {
	it('e2e', function () {
		const apiService = new ApiService()
		const errorHandlerMock = jest.fn()
		const logHandlerMock = jest.fn()
		const errorHandlerApiServiceDecorator = new ErrorHandlerApiServiceDecorator(apiService, errorHandlerMock)
		const loggingApiServiceDecorator = new LoggingApiServiceDecorator(errorHandlerApiServiceDecorator, logHandlerMock)

		const result = loggingApiServiceDecorator.runService()

		expect(errorHandlerMock.mock.calls.length).toBe(0)
		expect(logHandlerMock.mock.calls.length).toBe(2)

		expect(result.status).toBe(200)
		expect(result.result).toBe('important info!')
	})
})
