import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
	test("Render", () => {
		render(<Header />);
	});
	test("contain text", () => {
		render(<Header/>)
		expect(screen.getByText(`Weather`)).toBeInTheDocument();
	});
});
