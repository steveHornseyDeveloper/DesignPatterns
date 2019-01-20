const Subject = require('./Subject')

describe('Subject tests', function () {
	it('observer is added', function () {
		const subject = new Subject()
		const observer = {}
		subject.attach(observer)

		expect(subject._observers.length).toBe(1)
	})
	it('observer can be removed', function () {
		const subject = new Subject()
		const mockObserver1 = jest.fn()
		const mockObserver2 = jest.fn()
		const observer1 = { update: mockObserver1 }
		const observer2 = { update: mockObserver2 }
		subject.attach(observer1)
		subject.attach(observer2)
		subject.detach(observer1)

		subject.notify()

		expect(mockObserver1.mock.calls.length).toBe(0)
		expect(mockObserver2.mock.calls.length).toBe(1)
	})
	it('observer has update called on notify', function () {
		const subject = new Subject()
		const mockObserver = jest.fn()
		const observer = { update: mockObserver }
		subject.attach(observer)

		subject.notify()
		expect(mockObserver.mock.calls.length).toBe(1)
	})
})
