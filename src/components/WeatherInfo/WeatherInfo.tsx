import WeatherBlock from "@components/WeatherBlock/WeatherBlock";
import * as React from "react";

function WeatherInfo() {
	return (
		<div className="weather-info">
			<WeatherBlock title="Weather Code" />
			<WeatherBlock title="Temperature" />
			<WeatherBlock title="Sunrise and sunset" />
			<WeatherBlock title="Precipitation" />
			<WeatherBlock title="Wind" />
		</div>
	);
}

export default WeatherInfo;
