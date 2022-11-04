import React from 'react'
import "./Row.css"

interface RowProps{
	children: React.ReactNode,
	style?: React.CSSProperties
}
 
const Row: React.FunctionComponent<RowProps> = (props:RowProps) => {
	return ( <div className='row' style={props.style}>
		{props.children}
	</div> );
}
 
export default Row;