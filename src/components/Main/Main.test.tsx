import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe("Main", () => {
	test("Main renders", () => {
		act(() => {
			render(<Main />);
		});
	});

	test("Wether blocks render", async () => {
		act(() => {
			render(<Main />);
		});

		expect(await screen.findByText("Weather Code")).toBeVisible();
		expect(await screen.findByText("Temperature")).toBeVisible();
		expect(await screen.findByText("Sunrise and sunset")).toBeVisible();
		expect(await screen.findByText("Precipitation")).toBeVisible();
		expect(await screen.findByText("Wind")).toBeVisible();

		screen.debug();
	});
});