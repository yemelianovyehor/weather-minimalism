import React from 'react'
import "./Row.css"

interface RowProps{
	children: React.ReactNode,
}
 
const Row: React.FunctionComponent<RowProps> = (props:RowProps) => {
	return ( <div className='row'>
		{props.children}
	</div> );
}
 
export default Row;