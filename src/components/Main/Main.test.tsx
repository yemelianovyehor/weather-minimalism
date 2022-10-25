import React from "react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";
// import axios from "axios";
// import data from "__mocks__/Weatherdata.json";

// jest.mock("axios");
// const mockedAxios = jest.mocked(axios, { shallow: false });
// mockedAxios.get.mockResolvedValue(data);

describe("Main", () => {
	test("Main renders", () => {
		act(() => {render(<Main />)});
	});
});

describe("Weather Blocks", () => {
	test("render", () => {
		const MainElement = render(<Main />);
		expect(screen.getByText("Weather Code")).toBeVisible();
		expect(screen.getByText("Temperature")).toBeVisible();
		expect(screen.getByText("Sunrise and sunset")).toBeVisible();
		expect(screen.getByText("Precipitation")).toBeVisible();
		expect(screen.getByText("Wind")).toBeVisible();
	});
});
