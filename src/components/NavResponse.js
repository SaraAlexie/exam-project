/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import { DimensionContext } from "../contexts/DimensionContext";
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

    const { dimension } = useContext(DimensionContext);
    const [open, setOpen] = useState(false);

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
