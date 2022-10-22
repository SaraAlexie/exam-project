/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#ff2a70" : "#ffffff",
    borderBottom: isActive ? "1px solid #ff2a70" : "none",
    textDecoration: "none",
    marginLeft: "2em",
    textTransform: "uppercase",
  });

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
  `;

  const navigation = css`
    align-self: center;
  `;

  return (
    <header css={header}>
      <div css={navWrapper}>
        <Link to="/">
          <img src="./assets/Logo.png" alt="Logo" />
        </Link>
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
      </div>
    </header>
  );
};

export default NavBar;
