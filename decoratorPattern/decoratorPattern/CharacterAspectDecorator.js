
class CharacterAspectDecorator {
	constructor (characterAspectDecorator, style) {
		this.characterAspectDecorator = characterAspectDecorator
		this.style = style
	}

	buildCharacter () {
		return this.characterAspectDecorator.buildCharacter()
	}
}

module.exports = CharacterAspectDecorator
