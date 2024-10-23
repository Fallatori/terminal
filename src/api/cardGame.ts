const getStringArray = (type, count) => {
	return [...new Array(count)].map(() => type)
}

const shuffle = (cards) => {
	return [...cards].sort(() => Math.floor(Math.random() * 2) - 1)
}

const dealCards = (cards, playerCount) => {
	const result = [...new Array(playerCount)].reduce(
		(sum) => {
			const hand = sum.deck.slice(0, 5)
			const remainingDeck = sum.deck.slice(5)
			//console.log({ hand, remainingDeck, playerSum: sum.players })
			return {
				players: [...sum.players, hand],
				deck: remainingDeck,
			}
		},
		{ players: [], deck: cards }
	)
	return result
}

export const cardGame = () => {
	const cards = [
		...getStringArray("Ace", 6),
		...getStringArray("King", 6),
		...getStringArray("Queen", 6),
		...getStringArray("Joker", 2),
	]

	const shuffledCards = shuffle(cards)
	const gameState = dealCards(shuffledCards, 4)

	return `Here are your cards: ${gameState.players[0]}`
}
