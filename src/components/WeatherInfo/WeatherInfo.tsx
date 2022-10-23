import WeatherBlock from "@components/WeatherBlock/WeatherBlock";
import Row from "@components/Row/Row";
import * as React from "react";

function WeatherInfo() {

	const [WeatherData, setWeatherData] = React.useState( );
	



	return (
		<div className="weather-info">
			<Row>
				<WeatherBlock title="Weather Code" />
			</Row>
			<Row>
				<WeatherBlock title="Temperature" />
				<WeatherBlock title="Sunrise and sunset" />
			</Row>
			<Row>
				<WeatherBlock title="Precipitation" />
				<WeatherBlock title="Wind" />
			</Row>
		</div>
	);
}

export default WeatherInfo;
