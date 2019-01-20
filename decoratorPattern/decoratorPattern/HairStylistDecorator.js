const CharacterAspectDecorator = require('./CharacterAspectDecorator')

class HairStylistDecorator extends CharacterAspectDecorator {
	buildCharacter () {
		return super.buildCharacter() + this.doHair()
	}

	doHair () {
		return ` with ${this.style} hair`
	}
}

module.exports = HairStylistDecorator
