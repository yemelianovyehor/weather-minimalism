export default interface Precipitation {
	[key: string]: PrecData;
	rain: PrecData;
	showers: PrecData;
	snowfalls: PrecData;
}

interface PrecData {
	[key: number]: string | number;
	amount: number;
	units: string;
}
