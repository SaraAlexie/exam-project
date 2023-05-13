import { render, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Blog from "../views/Blog";
import axios from "axios";

jest.mock("axios");

describe("blog component", () => {
    xtest("renders blog posts", async () => {
        const responseData = [
            {
                id: 1,
                title: "Blog Post Title 1",
                author: "Admin",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 2,
                title: "Blog Post Title 2",
                author: "Admin",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
        ];

        axios.mockResolvedValue({ data: responseData });

        const { getByText, getByRole } = render(
            <MemoryRouter initialEntries={["/blog"]}>
                <Routes>
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => getByText("Blog Post Title 1"));
        await waitFor(() => getByText("Blog Post Title 2"));
    });
});
