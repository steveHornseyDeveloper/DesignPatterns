const LoggingApiServiceDecorator = require('./LoggingApiServiceDecorator')

describe('LoggingApiServiceDecorator', function () {
	it('takes and sets properties', function () {
		const apiService = {}
		const log = () => {}

		const loggingApiServiceDecorator = new LoggingApiServiceDecorator(apiService, log)

		expect(loggingApiServiceDecorator.apiService).toBe(apiService)
		expect(loggingApiServiceDecorator.handleLog).toBe(log)
	})

	it('calls api service on runService', function () {
		const mockRunService = jest.fn(() => ({ success: true }))
		const apiService = { runService: mockRunService }
		const log = jest.fn()

		const loggingApiServiceDecorator = new LoggingApiServiceDecorator(apiService, log)

		loggingApiServiceDecorator.runService()

		expect(loggingApiServiceDecorator.apiService.runService.mock.calls.length).toBe(1)
		expect(log.mock.calls.length).toBe(2)
	})
})
