import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("Main", () => {
	test("Main renders", () => {
		render(<Main />);
	});
});

describe("Weather Blocks", () => {
	test("plc", () => {
		const MainElement = render(<Main />);
		expect(screen.getByText("Weather Code")).toBeVisible();
		expect(screen.getByText("Temperature")).toBeVisible();
		expect(screen.getByText("Sunrise and sunset")).toBeVisible();
		expect(screen.getByText("Precipitation")).toBeVisible();
		expect(screen.getByText("Wind")).toBeVisible();
	});
});
