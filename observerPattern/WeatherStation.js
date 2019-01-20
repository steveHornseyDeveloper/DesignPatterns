const Subject = require('./observeBaseClasses/Subject')
const Weather = require('./models/Weather')

class WeatherStation extends Subject {
	constructor () {
		super()
		this.currentWeather = new Weather()
	}

	receiveNewResults (newWeather) {
    	this.currentWeather = newWeather

    	this.notify()
	}

	reportWeather () {
    	return this.currentWeather
	}
}

module.exports = WeatherStation
