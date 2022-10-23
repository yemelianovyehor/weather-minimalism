import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherInfo from "@components/WeatherInfo/WeatherInfo";
import axios from "axios";
import data from "__mocks__/Weatherdata.json";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

mockedAxios.get.mockResolvedValue(data);

describe("WeatherInfo", () => {
	test("render", async () => {
		render(<WeatherInfo />);
		const temp = new RegExp("Temperature\n*((-|)d+)/((-|)d+..)", "s");
		expect(await screen.findByText(temp)).toBeInTheDocument();
	});
});
