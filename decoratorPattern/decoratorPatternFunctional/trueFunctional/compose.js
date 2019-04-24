const logStart = (handleLog) => (result) => {
	handleLog('Started')
	return result
}
const logEnd = (handleLog) => (result) => {
	handleLog('Ended')
	return result
}

const errorHandler = (handleError) => (result) => {
	if (result.error) {
		handleError()
	}

	return result
}

const apiService = (fetch) => () => (fetch('api/controller'))

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
