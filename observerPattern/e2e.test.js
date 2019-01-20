const WeatherStation = require('./WeatherStation')
const DisplayScreen = require('./DisplayScreen')
const Weather = require('./models/Weather')

describe('e2e', function () {
	it('Notification sent to listening observers', function () {
		const weatherStation = new WeatherStation()

		const displayScreen = new DisplayScreen(weatherStation)

		weatherStation.attach(displayScreen)

		const newWeather = new Weather(24, 0, 6)
		weatherStation.receiveNewResults(newWeather)

		var expectedText = 'Temperature: 24°C, Rain amount: 0ml/hour, Cloud cover: 6%'
		expect(displayScreen.displayedText).toBe(expectedText)
	})
})
