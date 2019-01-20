const ApiServiceDecorator = require('./ApiServiceDecorator')

describe('ApiServiceDecorator', function () {
	it('Takes a service', function () {
		const service = {}

		const apiServiceDecorator = new ApiServiceDecorator(service)

		expect(apiServiceDecorator.apiService).toBe(service)
	})
	it('Calls service upon runService method', function () {
		const mockRunService = jest.fn()
		const service = { runService: mockRunService }

		const apiServiceDecorator = new ApiServiceDecorator(service)

		apiServiceDecorator.runService()

		expect(apiServiceDecorator.apiService.runService.mock.calls.length).toBe(1)
	})
})
