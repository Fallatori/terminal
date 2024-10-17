import { greetings } from "./greetings"
import { help } from "./help"
import { reapeatAfterMe } from "./repeatAfterMe"

export const terminalAPI = (query: string) => {
	const splitQuery = query.split(" ")

	switch (splitQuery[0]) {
		case "HELP":
			return help()
		case "GREETINGS":
			return greetings()
		case "REPEAT":
			return reapeatAfterMe(splitQuery.slice(1))
		default:
			return "Do not understand command"
	}
}
