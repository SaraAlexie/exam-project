import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Blog from "../views/Blog";

it("renders learn react link", () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </MemoryRouter>
    );
});
