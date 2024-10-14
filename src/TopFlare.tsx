import styled from "styled-components"

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
`

const TopRow = styled.div`
	display: flex;
	height: 50%;
	width: 100%;
`

const FlareText = styled.p`
	font-family: monospace;
	margin: 0;
	padding: 1px;
`

const NewlineSpan = styled.span`
	display: block;
`

const DebugBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	background: grey;
`

const Logging = styled.div``

const Controls = styled.div``

export const TopFlare = () => {
	return (
		<Wrapper>
			<TopRow>
				<DebugBox>
					<FlareText>
						DEBUG CONSOLE <NewlineSpan>[ENABLED]</NewlineSpan>
					</FlareText>
					<div>sopp</div>
				</DebugBox>
				<Logging>Logging</Logging>
				<Controls>Controls</Controls>
			</TopRow>
		</Wrapper>
	)
}
