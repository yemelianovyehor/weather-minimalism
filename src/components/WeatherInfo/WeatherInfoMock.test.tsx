import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherInfo from "@components/WeatherInfo/WeatherInfo";
import { act } from "react-dom/test-utils";

describe("WeatherInfo", () => {
	test("render with mocked info", async () => {
		act(() => {
			render(<WeatherInfo />);
		});
		// prettier-ignore
		const tempRegExp = new RegExp("((-|)\\d+ - (-|)\\d+..)");
		screen.debug();

		let tempNode: HTMLElement;
		await waitFor(() => {
			tempNode = screen.getByText("Temperature");
		});
		expect(tempNode!.nextSibling?.nextSibling).toHaveTextContent(tempRegExp);
	});
});
