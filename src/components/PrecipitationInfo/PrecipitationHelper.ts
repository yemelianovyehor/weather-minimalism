import Precipitation from "src/types/PrecipitationData";

export default function PrecipitationConverter(
	Pdata: Precipitation
): [string, string] {
	//[data, extra] amount, Type
	if ((Pdata.rain.amount + Pdata.showers.amount + Pdata.snowfalls.amount) === 0) {
		return ["None", ""];
	} else {
		return normalize(Pdata);
	}
}

function normalize(data: Precipitation): [string, string] {
	// make all "mm" if they are not
	let sum = 0;
	for (let i of Object.keys(data)) {
		const units = data[i].units;
		let k;
		switch (units) {
			case "mm":
				k = 1;
				break;
			case "cm":
				k = 10;
				break;
			case "m":
				k = 100;
				break;
			default:
				throw Error("Unknown units");
		}
		sum += data[i].amount * k;
	}

	//summarise and reduce.
	let units = "mm";
	if (sum > 100) {
		sum /= 10;
		units = "cm";
	}

	//get type of precipitation
	let PrecType;
	if (data.snowfalls.amount !== 0) {
		if (data.rain.amount === 0 && data.showers.amount === 0) {
			PrecType = "Snow";
		} else {
			PrecType = "Wet snow";
		}
	} else {
		PrecType =
			data.rain.amount > 0
				? data.showers.amount > 0
					? "Rain + Showers"
					: "Rain"
				: "Showers";
	}

	const ret = [`${sum} ${units}`, PrecType] as [string, string];

	return ret; //Amount, Type
}
