import * as React from 'react';
import WeatherInfo from '@components/WeatherInfo/WeatherInfo';


interface MainProps {
	
}
 
interface MainState {
	
}
 
class Main extends React.Component<MainProps, MainState> {
	// state = { :  }
	render() { 
		return ( <main>
			<WeatherInfo/>
		</main> );
	}
}
 
export default Main;