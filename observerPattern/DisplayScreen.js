const Observer = require('./observeBaseClasses/Observer')

class DisplayScreen extends Observer {
	update () { // This is an implemented method all observers must have, should it be in the Observer class?
		const currentWeather = this.subject.reportWeather()

		this.updateView(currentWeather)
	}

	updateView ({ temperature, rainAmount, cloudCover }) {
		this.displayedText = `Temperature: ${temperature}°C, Rain amount: ${rainAmount}ml/hour, Cloud cover: ${cloudCover}%`
	}
}

module.exports = DisplayScreen
