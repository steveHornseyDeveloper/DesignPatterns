const DisplayScreen = require('./DisplayScreen')
const Weather = require('./models/Weather')

describe('DisplayScreen tests', function () {
	it('should take an Subject', function () {
		const subject = {}
		const displayScreen = new DisplayScreen(subject)

		expect(displayScreen.subject).toBe(subject)
	})
	it('UpdateView updates the displayText', function () {
		const displayScreen = new DisplayScreen({})
		const weather = new Weather(11, 0.3, 95)
		displayScreen.updateView(weather)

		var expectedText = 'Temperature: 11°C, Rain amount: 0.3ml/hour, Cloud cover: 95%'

		expect(displayScreen.displayedText).toBe(expectedText)
	})
})
