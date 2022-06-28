import React from 'react'
import './style.css'
import { useState } from 'react'

export function SecaoComentario(props) {
	const [value, setValue] = useState('')
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}