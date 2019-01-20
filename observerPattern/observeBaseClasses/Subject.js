class Subject {
	constructor () {
		this._observers = []
	}
	attach (observer) {
		this._observers.push(observer)
	}
	detach (observer) {
		this._observers = this._observers.filter(o => o !== observer)
	}
	notify () {
		this._observers.forEach(o => {
			o.update()
		})
	}
}

module.exports = Subject
