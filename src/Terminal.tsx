import { forwardRef, useState } from "react"
import borderFrame from "./borderFrame.svg"
import styled from "styled-components"
import { Input } from "./Input"
import { terminalAPI } from "./api"

const Wrapper = styled.div`
	text-transform: uppercase;
	font-family: monospace;
	margin: 20px;
	padding: 20px;
	border-image: url(${borderFrame}) round;
	white-space: pre;
	border-image-width: 20px 20px;
	border-image-slice: 20;
`

export const Terminal = forwardRef<HTMLInputElement>((_, ref) => {
	const [logs, setLogs] = useState<string[]>([])
	return (
		<Wrapper>
			{logs.map((query) => {
				return <p>{query}</p>
			})}
			<Input
				addQuery={(query) => {
					const terminalOutput = terminalAPI(query)
					if (terminalOutput === "CLEAR") {
						return setLogs([])
					}
					setLogs((q) => [
						...q,
						`//root/: ${query}`,
						...terminalOutput.split(/\r?\n/),
					])
				}}
				ref={ref}
			/>
		</Wrapper>
	)
})
