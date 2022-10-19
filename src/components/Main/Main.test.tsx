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
		expect(screen.getByText("Weather Code")).toBeInTheDocument();
		expect(screen.getByText("Temperature")).toBeInTheDocument();
		expect(screen.getByText("Sunrise and sunset")).toBeInTheDocument();
		expect(screen.getByText("Precipitation")).toBeInTheDocument();
		expect(screen.getByText("Wind")).toBeInTheDocument();
	});
});
