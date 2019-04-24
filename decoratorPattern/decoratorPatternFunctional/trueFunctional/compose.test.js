const consumeApiService = require('./compose')

describe('compose', function () {
	it('calls 3 dependencies in order on failure', function () {
		const mockFunction = jest.fn(() => {})
		const mockFetch = jest.fn(() => ({
			error: 'ahh sheet'
		}))

		consumeApiService({
			fetch: mockFetch,
			handleLog: mockFunction,
			handleError: mockFunction,
			errorHandler: mockFunction
		})

		expect(mockFunction.mock.calls.length).toBe(3)
		expect(mockFunction.mock.calls[0][0]).toBe('Started')
		expect(mockFunction.mock.calls[1][0]).toBe('Ended')
		expect(mockFunction.mock.calls[2][0]).toBe(undefined)
	})

	it('calls 2 dependencies in order on success', function () {
		const mockFunction = jest.fn(() => {})
		const mockFetch = jest.fn(() => ({
			status: 200,
			result: 'important info!'
		}))

		consumeApiService({
			fetch: mockFetch,
			handleLog: mockFunction,
			handleError: mockFunction,
			errorHandler: mockFunction
		})

		expect(mockFunction.mock.calls[0][0]).toBe('Started')
		expect(mockFunction.mock.calls[1][0]).toBe('Ended')
	})

	it('returns result', function () {
		const response = ({
			status: 200,
			result: 'important info!'
		})

		const mockFetch = jest.fn(() => response)

		const mockFunctionLogger = jest.fn(() => {})

		const actualResult = consumeApiService({
			fetch: mockFetch,
			handleLog: mockFunctionLogger,
			handleError: mockFunctionLogger,
			errorHandler: mockFunctionLogger
		})

		expect(actualResult).toBe(response)
	})
})
