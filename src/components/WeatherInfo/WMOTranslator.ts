interface IWmo {
	[key: number]:string
}

const WMO : IWmo = {
	0: "Clear",
	1: "Mainly clear",
	2: "Partialy Cloudy",
	3: "Oversact",
	45: "Fog",
	48: "Depositing rime fog",
	51: "Light drizzle",
	53: "Moderate drizzle",
	55: "Dense drizzle",
	56: "Light freezing drizzle",
	57: "Dense freezing drizzle",
	61: "Light rain",
	63: "Moderate rain",
	65: "Heavy rain",
	66: "Light freezing rain",
	67: "Heavy freezing rain",
	71: "Slight snow fall",
	73: "Moderate snow fall",
	75: "Heavy snow fall",
	77: "snow grains",
	80: "Slight rain shower",
	81: "Moderate rain shower",
	82: "Violent rain shower",
	85: "Light snow shower",
	86: "Heavy snow shower",
	95: "Thunderstorm",
	96: "Thunderstorm with light hail",
	99: "Thunderstorm with heavy hail",
};

// function translate(index: keyof WMO)

export default WMO;