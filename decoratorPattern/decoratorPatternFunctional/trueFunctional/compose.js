const logStart = (handleLog) => (result) => handleLog('Started')
const logEnd = (handleLog) => (result) => handleLog('Ended')
const errorHandler = (handleError) => (result) => {
	// Could improve this with monads?
	if (result.error) {
		handleError()
	}

	return result
}

const apiService = (fetch) => () => ({
	status: 200,
	result: 'important info!'
})

function consumeApiService (dependencies) {
	const { handleLog, handleError, fetch } = dependencies

	const errorHandledLoggingApiCall = compose(
		errorHandler(handleError),
		logEnd(handleLog),
		apiService(fetch),
		logStart(handleLog))

	const result = errorHandledLoggingApiCall()

	return result
}

module.exports = consumeApiService

// credit to https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83
const compose = (...fns) =>
	fns.reduceRight((prevFn, nextFn) =>
		(...args) => nextFn(prevFn(...args)),
	value => value
	)
