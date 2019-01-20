const ErrorHandlerApiServiceDecorator = require('./ErrorHandlerApiServiceDecorator')
describe('ErrorHandlerApiServiceDecorator', function () {
	it('takes and sets properties', function () {
		const apiService = {}
		const handleError = () => {}

		const errorHandlerApiServiceDecorator = new ErrorHandlerApiServiceDecorator(apiService, handleError)

		expect(errorHandlerApiServiceDecorator.apiService).toBe(apiService)
		expect(errorHandlerApiServiceDecorator.handleError).toBe(handleError)
	})

	it('calls api service on runService', function () {
		const mockRunService = jest.fn(() => ({ status: 200 }))
		const apiService = { runService: mockRunService }

		const errorHandlerApiServiceDecorator = new ErrorHandlerApiServiceDecorator(apiService)

		errorHandlerApiServiceDecorator.runService()

		expect(errorHandlerApiServiceDecorator.apiService.runService.mock.calls.length).toBe(1)
	})

	it('calls handleError on runService error', function () {
		const mockRunService = jest.fn(() => ({ status: 500 }))
		const apiService = { runService: mockRunService }
		const handleError = jest.fn()

		const errorHandlerApiServiceDecorator = new ErrorHandlerApiServiceDecorator(apiService, handleError)

		errorHandlerApiServiceDecorator.runService()

		expect(handleError.mock.calls.length).toBe(1)
	})
})
