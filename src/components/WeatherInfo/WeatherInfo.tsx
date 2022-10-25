import WeatherBlock from "@components/WeatherBlock/WeatherBlock";
import Row from "@components/Row/Row";
import * as React from "react";
import ApiAnswer from "../../types/ApiAnswer";
import axios from "axios";
// import * as data from '__mocks__/Weatherdata.json';

function WeatherInfo() {
	const [WeatherData, setWeatherData] = React.useState<ApiAnswer | false>(
		false
	);
	const [isLoading, setLoading] = React.useState(true);
	const [isError, setError] = React.useState(false);

	React.useState(() => {
		axios
			.get(
				"https://api.open-meteo.com/v1/forecast?latitude=52.4095&longitude=16.9319&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&start_date=2022-10-12&end_date=2022-10-12",
				{ timeout: 1000 }
			)
			.then((res) => {
				setWeatherData(res.data);
				setLoading(false);
			})
			.catch((e) => setError(e));
	});

	let data, units;
	if (WeatherData) {
		data = WeatherData.daily;
		units = WeatherData.daily_units;
	}

	return isLoading ? (
		<h2>Loading</h2>
	) : isError ? (
		<h2>Sorry, an error occured</h2>
	) : (
		<div className="weather-info">
			<Row>
				<WeatherBlock title="Weather Code" data="placeholder" />
			</Row>
			<Row>
				<WeatherBlock
					title="Temperature"
					data={
						data?.apparent_temperature_min +
						" - " +
						data?.temperature_2m_max +
						units?.temperature_2m_max
					}
				/>
				<WeatherBlock title="Sunrise and sunset" data="placeholder" />
			</Row>
			<Row>
				<WeatherBlock title="Precipitation" data="placeholder" />
				<WeatherBlock title="Wind" data="placeholder" />
			</Row>
		</div>
	);
}

export default WeatherInfo;
