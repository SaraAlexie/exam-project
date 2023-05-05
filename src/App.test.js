import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "./App";

it("renders learn react link", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
});
