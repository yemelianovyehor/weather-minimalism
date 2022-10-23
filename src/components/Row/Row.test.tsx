import * as React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Row from './Row';

describe('Row', () => {
	test('render children', () => {
		render(<Row><div>children 1</div><div>children 2</div></Row>);
		expect(screen.getByText("children 1")).toBeVisible();
		expect(screen.getByText("children 2")).toBeVisible();
	});
});