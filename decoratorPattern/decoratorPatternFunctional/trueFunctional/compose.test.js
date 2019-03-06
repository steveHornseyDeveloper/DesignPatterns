const consumeApiService = require('./compose')

describe('compose', function () {
	it('calls 3 dependencies in order on failure', function () {
		const mockFunction = jest.fn(() => ({
			error: 'ahh sheet'
		}))

		consumeApiService({
			handleLog: mockFunction,
			handleError: mockFunction,
			errorHandler: mockFunction
		})

		expect(mockFunction.mock.calls[0][0]).toBe('Started')
		expect(mockFunction.mock.calls[1][0]).toBe('Ended')
		expect(mockFunction.mock.calls[2][0]).toBe(undefined)
	})

	it('calls 2 dependencies in order on success', function () {
		const mockFunction = jest.fn(() => ({
			status: 200,
			result: 'important info!'
		}))

		consumeApiService({
			handleLog: mockFunction,
			handleError: mockFunction,
			errorHandler: mockFunction
		})

		expect(mockFunction.mock.calls[0][0]).toBe('Started')
		expect(mockFunction.mock.calls[1][0]).toBe('Ended')
	})
})
