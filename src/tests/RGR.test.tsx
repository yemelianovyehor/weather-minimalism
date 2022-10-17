import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Init Test", () => {
	test("Render App", () => {
		render(<App />);
		expect(screen.getByText("main")).toBeInTheDocument();
	});
});
