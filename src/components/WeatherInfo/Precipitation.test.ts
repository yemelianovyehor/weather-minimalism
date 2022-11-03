import PrecipitationConverter from "./PrecipitationHelper";
import Precipitation from "../../types/PrecipitationData";

describe("Precipitation", () => {
	test('return "None" if clear', () => {
		const data: Precipitation = {
			rain: {amount:0, units:"mm"},
			snowfalls: {amount:0, units:"mm"},
			showers: {amount:0, units:"mm"},
		};

		expect(PrecipitationConverter(data)).toStrictEqual(["None", ""]);
	});

	test("return Rain 5mm", () => {
		const data: Precipitation = {
			rain: { amount: 5, units: "mm" },
			snowfalls: { amount: 0, units: "cm" },
			showers: { amount: 0, units: "mm" },
		};

		const [amount, units] = PrecipitationConverter(data);

		expect([amount, units]).toStrictEqual(["5 mm", "Rain"]);
	});

	test("return snowfall 20mm ", () => {
		const data: Precipitation = {
			rain: { amount: 0, units: "mm" },
			snowfalls: { amount: 2, units: "cm" },
			showers: { amount: 0, units: "mm" },
		};

		const [amount, units] = PrecipitationConverter(data);

		expect([amount, units]).toStrictEqual(["20 mm", "Snow"]);

	})

	test("return Wet snow 11 cm ", () => {
		const data: Precipitation = {
			rain: { amount: 8, units: "cm" },
			snowfalls: { amount: 3, units: "cm" },
			showers: { amount: 0, units: "mm" },
		};

		const [amount, units] = PrecipitationConverter(data);

		expect([amount, units]).toStrictEqual(["11 cm", "Wet snow"]);
	})

	test("return snowfall 20mm ", () => {
		const data: Precipitation = {
			rain: { amount: 0, units: "mm" },
			snowfalls: { amount: 2, units: "cm" },
			showers: { amount: 0, units: "mm" },
		};

		const [amount, units] = PrecipitationConverter(data);

		expect([amount, units]).toStrictEqual(["20 mm", "Snow"]);

	})
});
