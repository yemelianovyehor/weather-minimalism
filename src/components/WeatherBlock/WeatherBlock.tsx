import * as React from "react";
import "./WeatherBlock.css"

interface WeatherBlockProps {
	title: string;
	data: string;
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
				<span>{this.props.data}</span>
			</div>
		);
	}
}

export default WeatherBlock;
