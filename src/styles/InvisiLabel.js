/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const InvisiLabel = ({ htmlFor, title }) => {
    const labelStyle = css`
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;

    return (
        <label css={labelStyle} htmlFor={htmlFor}>
            {title}
        </label>
    );
};

export default InvisiLabel;
