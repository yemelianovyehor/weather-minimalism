import * as React from "react";
import "./WeatherBlock.css"

interface WeatherBlockProps {
	title: string;
	extra? : string;
	data: string|React.ReactElement;
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
				<div>{this.props.extra}</div>
				<span>{this.props.data}</span>
			</div>
		);
	}
}

export default WeatherBlock;
