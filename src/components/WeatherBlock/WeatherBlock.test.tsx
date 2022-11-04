import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherBlock from "./WeatherBlock";

describe('Weather Block', () => { 
	test('render title', () => {
		const title = "Quackidy quack";
		const data = "somedata"
		render(<WeatherBlock title={title}>{data}</WeatherBlock>)
		expect(screen.getByText(title)).toBeVisible();
		expect(screen.getByText(data)).toBeVisible();
	});
 })
