import styled from "styled-components"
import { SR_ONLY } from "./styles"
import { useForm } from "react-hook-form"
import { forwardRef, useState } from "react"

const Form = styled.form`
	display: flex;
`

const Button = styled.button`
	${SR_ONLY}
`

const InputComponent = styled.input<{ w?: string }>`
	text-transform: uppercase;
	font-family: monospace;
	color: #d0d0d0;
	background-color: hsla(0, 0%, 50.19607843137255%, 0.517);
	width: ${(props) => props.w ?? "1ch"};
	border: none;
	margin: 0;
	padding: 0;
	&:focus {
		outline: none;
	}
`

const BlinkingUnderline = styled.span`
	position: absolute;
	right: 0;
	animation: blink 1.5s step-end infinite;
	border-bottom: 2px solid white;
	@keyframes blink {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: white;
		}
	}
`

const InputWrapper = styled.div`
	position: relative;
`

interface Props {
	addQuery: (query: string) => void
}

export const Input = forwardRef<HTMLInputElement, Props>(
	({ addQuery }: Props, ref) => {
		const [queries, setQueries] = useState<string[]>([])
		const [queryIndex, setQueryIndex] = useState(0)

		const { handleSubmit, register, reset, watch, setValue } = useForm<{
			query: string
		}>()
		const watchQuery = watch("query", "")
		const onSubmit = (data: { query: string }) => {
			const query = data.query.toUpperCase()
			//console.log({ query })
			addQuery(query)
			setQueries((q) => {
				const newQueries = [...q, query]
				setQueryIndex(newQueries.length)
				return newQueries
			})

			reset()
		}

		const { ref: hookFormRef, ...rest } = register("query")
		return (
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputWrapper>
					<InputComponent
						{...rest}
						ref={(e) => {
							hookFormRef(e)
							if (typeof ref === "function") {
								// console.log("Its a function")
								ref(e)
							} else if (
								typeof ref === "object" &&
								ref &&
								Object.prototype.hasOwnProperty.call(ref, "current")
							) {
								// console.log("Its an object")
								ref.current = e
							} else {
								// console.log("its...", ref)
							}
						}}
						w={`${watchQuery.length > 0 ? watchQuery.length + 1 : 1}ch`}
						autoFocus
						onKeyDown={(e) => {
							if (e.code === "ArrowUp") {
								if (queryIndex > 0) {
									setQueryIndex((index) => {
										const newIndex = index - 1
										setValue("query", queries[newIndex])
										return newIndex
									})
								}
							}
							if (e.code === "ArrowDown") {
								if (queryIndex < queries.length) {
									setQueryIndex((index) => {
										const newIndex = index + 1
										setValue("query", queries[newIndex])
										return newIndex
									})
								}
							}
						}}
					/>
					<BlinkingUnderline> </BlinkingUnderline>
				</InputWrapper>
				<Button>Submit</Button>
			</Form>
		)
	}
)
