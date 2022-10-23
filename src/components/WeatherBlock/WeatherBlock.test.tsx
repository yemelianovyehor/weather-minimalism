import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherBlock from "./WeatherBlock";

describe('Weather Block', () => { 
	test('render title', () => {
		const title = "Quackidy quack";
		render(<WeatherBlock title={title}/>)
		expect(screen.getByText(title)).toBeVisible();
	});
 })
