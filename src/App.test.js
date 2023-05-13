import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

it.skip("renders", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );
});
