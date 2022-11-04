import React from "react";
import WeatherBlock from "@components/WeatherBlock/WeatherBlock";
import Row from "@components/Row/Row";
import ApiAnswer from "../../types/ApiAnswer";
import axios, { AxiosError } from "axios";
import WMO from "./WMOTranslator";
import WindInfo from "@components/WindInfo/WindInfo";
import "./WeatherInfo.css";
// import PrecipitationConverter from "@components/PrecipitationInfo/PrecipitationHelper";
import PrecipitationInfo from "../PrecipitationInfo/PrecipitationInfo";

function WeatherInfo() {
	const [WeatherData, setWeatherData] = React.useState<ApiAnswer | false>(
		false
	);
	const [isLoading, setLoading] = React.useState(true);
	const [isError, setError] = React.useState<AxiosError | false>(false);

	React.useState(() => {
		const today = new Date().toISOString().split("T")[0];
		axios
			.get(
				`https://api.open-meteo.com/v1/forecast?latitude=52.4095&longitude=16.9319&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&start_date=${today}&end_date=${today}`,
				// `https://api.open-meteo.com/v1/forecast?latitude=52.4095&longitude=16.9319&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&start_date=2022-11-05&end_date=2022-11-05`,
				{ timeout: 1000 }
			)
			.then((res) => {
				setWeatherData(res.data);
				setLoading(false);
			})
			.catch((e) => {
				setError(e);
				setLoading(false);
				console.log(e.message);
			});
	});

	let data: ApiAnswer["daily"], units: ApiAnswer["daily_units"];
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
			<small>{new Date().toISOString().split("T")[0]}</small>
			<Row>
				<WeatherBlock title="Weather Code">
					{WMO[data!.weathercode[0]]}
				</WeatherBlock>
			</Row>
			<Row>
				<WeatherBlock title="Temperature">
					<>
						{data!.apparent_temperature_min +
							" - " +
							data!.temperature_2m_max +
							units!.temperature_2m_max}
					</>
				</WeatherBlock>
				<WeatherBlock title="Sunrise and sunset">
					<>
						{data!.sunrise[0].split("T").pop() +
							" - " +
							data!.sunset[0].split("T").pop()}
					</>
				</WeatherBlock>
			</Row>
			<Row style={{ height: "135px" } as React.CSSProperties}>
				<WeatherBlock title="Precipitation">
					<PrecipitationInfo
						data={{
							rain: {
								amount: data!.rain_sum[0],
								units: units!.rain_sum,
							},
							showers: {
								amount: data!.showers_sum[0],
								units: units!.showers_sum,
							},
							snowfalls: {
								amount: data!.snowfall_sum[0],
								units: units!.snowfall_sum,
							},
						}}
					/>
				</WeatherBlock>
				<WeatherBlock title="Wind">
					<WindInfo
						winddirection={data!.winddirection_10m_dominant[0]}
						windspeed={data!.windspeed_10m_max[0]}
						windgust={data!.windgusts_10m_max[0]}
						windgust_units={units!.windgusts_10m_max}
						windspeed_units={units!.windspeed_10m_max}
					/>
				</WeatherBlock>
			</Row>
		</div>
	);
}

export default WeatherInfo;
