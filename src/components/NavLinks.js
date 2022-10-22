/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
    const navLinkStyles = ({ isActive }) => ({
        color: isActive ? "#ff2a70" : "#ffffff",
        borderBottom: isActive ? "1px solid #ff2a70" : "none",
        textDecoration: "none",
        marginLeft: "2em",
        marginBottom: "0.5em",
        textTransform: "uppercase",
    });

    const navigation = css`
        align-self: center;
        @media (max-width: 1100px) {
            margin-right: 2em;
        }
        @media (max-width: 600px) {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: 1;
            position: absolute;
            right: 5em;
        }
    `;
    return (
        <nav css={navigation}>
            <NavLink style={navLinkStyles} to="/">
                home
            </NavLink>
            <NavLink style={navLinkStyles} to="/blog">
                blog
            </NavLink>
            <NavLink style={navLinkStyles} to="/contact">
                contact us
            </NavLink>
        </nav>
    );
};

export default Navlinks;
