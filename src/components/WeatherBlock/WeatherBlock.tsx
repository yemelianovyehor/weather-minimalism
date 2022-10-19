import * as React from 'react';

interface WeatherBlockProps {
	title:string
}
 
interface WeatherBlockState {
	
}
 
class WeatherBlock extends React.Component<WeatherBlockProps, WeatherBlockState> {
	// state = { :  }
	render() { 
		return ( <h3>{this.props.title}</h3> );
	}
}
 
export default WeatherBlock;