import React from 'react'

const Header = () => {
	return ( 
		<header>
			<h1>Weather in Poznań</h1>
			<small>{new Date().toISOString().split("T")[0]}</small>
		</header>
	 );
}
 
export default Header;