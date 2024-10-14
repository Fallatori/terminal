import { useState } from "react"
import borderFrame from "./borderFrame.svg"
import styled from "styled-components"
import { Input } from "./Input"

const Wrapper = styled.div`
	margin: 20px;
	padding: 20px;
	border-image: url(${borderFrame}) round;
	border-image-width: 20px 20px;
	border-image-slice: 20;
`

export const Terminal = () => {
	const [queries, setQueries] = useState<string[]>([])
	return (
		<Wrapper>
			{queries.map((query) => {
				return <p>{query}</p>
			})}
			<Input addQuery={(query) => setQueries((q) => [...q, query])} />
		</Wrapper>
	)
}
