export default interface ApiAnswer {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	daily_units: {
		time: string;
		weathercode: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		apparent_temperature_max: string;
		apparent_temperature_min: string;
		sunrise: string;
		sunset: string;
		rain_sum: string;
		showers_sum: string;
		snowfall_sum: string;
		windspeed_10m_max: string;
		windgusts_10m_max: string;
		winddirection_10m_dominant: string;
	};
	daily: {
		time: [string];
		weathercode: [number];
		temperature_2m_max: [number];
		temperature_2m_min: [number];
		apparent_temperature_max: [number];
		apparent_temperature_min: [number];
		sunrise: [string];
		sunset: [string];
		rain_sum: [number];
		showers_sum: [number];
		snowfall_sum: [number];
		windspeed_10m_max: [number];
		windgusts_10m_max: [number];
		winddirection_10m_dominant: [number];
	};
}
