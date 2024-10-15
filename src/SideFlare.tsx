import styled from "styled-components"

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	grid-row-end: span 2;
`

const Diagram = styled.div``

const Decoding = styled.div``

export const SideFlare = () => {
	return (
		<Wrapper>
			<Diagram>Decoding!!!!</Diagram>
			<Decoding>Decoding</Decoding>
			<HardDrive>Hard Drive</HardDrive>
		</Wrapper>
	)
}
