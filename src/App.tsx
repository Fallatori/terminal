import styled, { createGlobalStyle } from "styled-components"
import { Terminal } from "./Terminal"
import { TopFlare } from "./TopFlare"
import { SideFlare } from "./SideFlare"
import { useRef } from "react"

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: hsl(180, 2.564102564102564%, 7.647058823529412%);
	}
`

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 80px;
	grid-template-rows: 80px 1fr;
	height: 100vh;
	color: #2af82a;
`

function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	return (
		<Wrapper
			onClick={() => {
				if (inputRef.current) {
					//console.log(inputRef.current)
					inputRef.current.focus()
				}
			}}
		>
			<GlobalStyle />
			<TopFlare />
			<SideFlare />
			<Terminal ref={inputRef} />
		</Wrapper>
	)
}

export default App
