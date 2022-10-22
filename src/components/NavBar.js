/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import NavResponse from "./NavResponse";

const NavBar = () => {
    const header = css`
        width: 100%;
        position: sticky;
        top: 0;
        border-top: solid 1px #ff2a70;
        border-bottom: solid 1px #ff2a70;
        padding: 1em 0;
        background-color: #030203;
        z-index: 100;
    `;

    const navWrapper = css`
        max-width: 65em;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media (max-width: 600px) {
            position: relative;
        }
    `;

    const logo = css`
        @media (max-width: 1100px) {
            margin-left: 1em;
            margin-top: 0.5rem;
            max-width: 10rem;
        }
    `;

    return (
        <header css={header}>
            <div css={navWrapper}>
                <Link to="/">
                    <img css={logo} src="./assets/Logo.png" alt="Logo" />
                </Link>
                <NavResponse />
            </div>
        </header>
    );
};

export default NavBar;
