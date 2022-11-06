import * as React from "react";
import "./WeatherBlock.css"

interface WeatherBlockProps {
	title?: string;
	// data: string|React.ReactElement;
	children?: JSX.Element | string;
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
				<div className="weather-block-content">
				<h3>{this.props.title}</h3>
				<div>{this.props.children}</div>
				</div>
			</div>
		);
	}
}

export default WeatherBlock;
