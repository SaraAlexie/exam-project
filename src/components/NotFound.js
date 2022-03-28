/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    const center = css`
        text-align: center;
        padding-top: 2em;
    `;

    const linkStyle = css`
        text-decoration: none;
    `;

    return (
        <section css={center}>
            <h1>Page not found</h1>
            <Link css={linkStyle} to="/">
                <p>Take me to home page</p>
            </Link>
        </section>
    );
};

export default NotFound;
