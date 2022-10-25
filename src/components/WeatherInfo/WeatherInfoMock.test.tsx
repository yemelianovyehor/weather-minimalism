import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherInfo from "@components/WeatherInfo/WeatherInfo";
import { act } from "react-dom/test-utils";

describe("WeatherInfo", () => {
	test("render with mocked info", async () => {
		act(() => {
			render(<WeatherInfo />);
		});
		const temp = new RegExp("Temperature.*((-|)d+)/((-|)d+..)", "s");
		expect(await screen.findByText(temp)).toBeInTheDocument();
	});
});
