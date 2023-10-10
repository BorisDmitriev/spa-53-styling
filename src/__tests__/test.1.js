/* eslint-disable testing-library/prefer-screen-queries */
// MyComponent.test.js
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import React from "react";
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
    it("renders a box with a title and description", () => {
        const { getByText } = render(<MyComponent />);
        expect(getByText("My Styled Box")).toBeInTheDocument();
        expect(
            getByText("This is a description of the box.")
        ).toBeInTheDocument();
    });

    it("renders two buttons with correct colors", () => {
        const { getByRole } = render(<MyComponent />);
        // check the green button
        const greenButton = getByRole("button", { name: "Green Button" });
        expect(greenButton).toBeInTheDocument();
        expect(greenButton).toHaveClass("btn-success");

        // check the red button
        const redButton = getByRole("button", { name: "Red Button" });
        expect(redButton).toBeInTheDocument();
        expect(redButton).toHaveClass("btn-danger");
    });
});
