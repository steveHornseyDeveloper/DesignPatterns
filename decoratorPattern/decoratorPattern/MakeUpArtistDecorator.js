const CharacterAspectDecorator = require('./CharacterAspectDecorator')

class MakeUpArtistDecorator extends CharacterAspectDecorator {
	buildCharacter () {
		return super.buildCharacter() + this.doMakeUp()
	}

	doMakeUp () {
		return ` disguised as ${this.style}`
	}
}

module.exports = MakeUpArtistDecorator
