import styled from "styled-components"
import { SR_ONLY } from "./styles"
import { useForm } from "react-hook-form"

const Form = styled.form``

const Button = styled.button`
	${SR_ONLY}
`

const InputComponent = styled.input`
	text-transform: uppercase;
	font-family: monospace;
	color: white;
	background: transparent;
	border: none;
	margin: 0;
	padding: 0;
	&:focus {
		outline: none;
		border-bottom: 2px solid white;
	}
`

interface Props {
	addQuery: (query: string) => void
}

export const Input = ({ addQuery }: Props) => {
	const { handleSubmit, register } = useForm()
	const onSubmit = (data) => {
		const query = data.query.toUpperCase()
		console.log({ query })
		addQuery(query)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputComponent {...register("query")} />
			<Button>Submit</Button>
		</Form>
	)
}
