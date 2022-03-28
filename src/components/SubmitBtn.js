/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SubmitBtn = ({ title, type }) => {
    const subBtn = css`
        text-transform: uppercase;
        background-color: #030203;
        color: #ffffff;
        border: 2px #ffffff;
        border-style: solid none;
        float: right;
        padding: 0.5em 0;
        width: 10em;
        cursor: pointer;
    `;

    return (
        <button css={subBtn} type={type}>
            {title}
        </button>
    );
};

export default SubmitBtn;
