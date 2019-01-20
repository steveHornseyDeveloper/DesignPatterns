function loggingApiServiceDecorator (apiServiceCall, handleLog) {
	return (route) => {
		handleLog(`Starting API call: ${route}`)
		const result = apiServiceCall(route)
		handleLog(`Finished API call: ${route}`)

		return result
	}
}

module.exports = loggingApiServiceDecorator
