export const roulett = () => {
	const roll = Math.floor(Math.random() * 6) + 1
	return `You rolled ${roll.toString()}`
}
