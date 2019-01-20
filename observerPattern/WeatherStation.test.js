const WeatherStation = require('./WeatherStation')
const Weather = require('./models/Weather')

describe('WeatherStation', function () {
	it('Has initial weather', function () {
		const weatherStation = new WeatherStation()

		expect(weatherStation.reportWeather()).toBeTruthy()
	})
	it('Weather can be updated', function () {
		const weatherStation = new WeatherStation()
		const newWeather = getNewWeather()

		weatherStation.receiveNewResults(newWeather)
		expect(weatherStation.reportWeather()).toBe(newWeather)
	})

	it('Notification sent to listening observers', function () {
		const weatherStation = new WeatherStation()

		const observerUpdateMethod = jest.fn()
		const observer = { update: observerUpdateMethod }

		weatherStation.attach(observer)

		const newWeather = getNewWeather()
		weatherStation.receiveNewResults(newWeather)

		expect(observer.update.mock.calls.length).toBe(1)
	})
})

function getNewWeather () {
	return new Weather()
}
