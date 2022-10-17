import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe ("App test", () => {
	test("App renders", ()=>{
		render(<App/>)
		screen.debug()
	});
})