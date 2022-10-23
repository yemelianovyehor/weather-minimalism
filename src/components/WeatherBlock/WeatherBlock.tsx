import * as React from "react";
import "./WeatherBlock.css"

interface WeatherBlockProps {
	title: string;
}

interface WeatherBlockState {}

class WeatherBlock extends React.Component<
	WeatherBlockProps,
	WeatherBlockState
> {
	// state = { :  }
	render() {
		return (
			<div className="weather-block">
				<h3>{this.props.title}</h3>
			</div>
		);
	}
}

export default WeatherBlock;
