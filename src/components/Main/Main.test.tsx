import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";

describe('Main', () => {
	test('Main renders', () => { 
		render(<Main/>);
	 })
});