import React from 'react'
import {CommentContainer, InputComentario} from '../../style'
import { useState } from 'react'

export function SecaoComentario(props) {
	const [value, setValue] = useState('')
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}