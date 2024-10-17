import { useState } from "react"
import borderFrame from "./borderFrame.svg"
import styled from "styled-components"
import { Input } from "./Input"
import { terminalAPI } from "./api"

const Wrapper = styled.div`
	margin: 20px;
	padding: 20px;
	border-image: url(${borderFrame}) round;
	border-image-width: 20px 20px;
	border-image-slice: 20;
`

export const Terminal = () => {
	const [logs, setLogs] = useState<string[]>([])
	return (
		<Wrapper>
			{logs.map((query) => {
				return <p>{query}</p>
			})}
			<Input
				addQuery={(query) => {
					const terminalOutput = terminalAPI(query)
					setLogs((q) => [...q, query, ...terminalOutput.split(/\r?\n/)])
				}}
			/>
		</Wrapper>
	)
}
