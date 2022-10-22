/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Navlinks from "./NavLinks";

const NavResponse = () => {
    const openButton = css`
        background-color: #030203;
        border: none;
        color: #ffffff;
        margin-right: 1em;
        display: flex;
        align-self: center;
    `;

    const menuBars = css`
        display: block;
        font-size: 2.5rem;
    `;

    const [dimension, setDimension] = useState({ width: window.innerWidth });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setDimension({ width: window.innerWidth });
        }
        window.addEventListener("resize", handleResize);
    }, []);

    const handleOpen = () => {
        setOpen(!open);
    };

    return dimension.width > 600 ? (
        <Navlinks />
    ) : (
        <button css={openButton} onClick={handleOpen}>
            {open ? <Navlinks /> : null}
            <div css={menuBars}>☰</div>
        </button>
    );
};

export default NavResponse;
