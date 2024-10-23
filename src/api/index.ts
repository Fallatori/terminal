import { cardGame } from "./cardGame"
import { devHelp } from "./devHelp"
import { greetings } from "./greetings"
import { help } from "./help"
import { reapeatAfterMe } from "./repeatAfterMe"
import { roulett } from "./roulett"

export const terminalAPI = (query: string) => {
	const splitQuery = query.split(" ")

	switch (splitQuery[0]) {
		case "HELP":
			return help()
		case "HELLO":
			return greetings()
		case "REPEAT":
			return reapeatAfterMe(splitQuery.slice(1))
		case "ROLL":
			return roulett()
		case "GAME":
			return cardGame()
		case "DEVHELP":
			return devHelp()
		case "CLEAR":
			return "CLEAR"
		default:
			return "Do not understand command"
	}
}
