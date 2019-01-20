function errorHandlerApiServiceDecorator (apiServiceCall, handleError) {
	return (route) => {
		const result = apiServiceCall(route)

		if (result.status !== 200) {
			handleError()
		}

		return result
	}
}

module.exports = errorHandlerApiServiceDecorator
