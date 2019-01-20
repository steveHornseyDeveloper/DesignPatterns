const Actor = require('./Actor')
const MakeUpArtistDecorator = require('./MakeUpArtistDecorator')
const HairStylistDecorator = require('./HairStylistDecorator')

describe('MakeUpArtistDecorator', function () {
	it('Use an actor and make up can be applied to them', function () {
		const actor = new Actor()
		const actorWithMakeUpArtist = new MakeUpArtistDecorator(actor, 'a homelessman')

		const buildCharacterResult = actorWithMakeUpArtist.buildCharacter()
		expect(buildCharacterResult).toBe('An actor disguised as a homelessman')
	})

	it('Wrap two decorators', function () {
		const actor = new Actor()
		const actorWithMakeUpArtist = new MakeUpArtistDecorator(actor, 'a homelessman')
		const actorWithMakeUpArtistAndHairStylist = new HairStylistDecorator(actorWithMakeUpArtist, 'unkempt, shaggy')

		const buildCharacterResult = actorWithMakeUpArtistAndHairStylist.buildCharacter()
		expect(buildCharacterResult).toBe('An actor disguised as a homelessman with unkempt, shaggy hair')
	})
})
