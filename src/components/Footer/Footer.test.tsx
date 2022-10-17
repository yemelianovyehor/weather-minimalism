import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", ()=>{
	test("Display name", ()=>{
		render(<Footer/>);
		expect(screen.getByText("By Yehor Yemelianov")).toBeVisible()
	})
})