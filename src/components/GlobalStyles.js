/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                #root {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: "Ubuntu", sans-serif;
                    background-color: #030203;

                    & h1 {
                        letter-spacing: 0.075em;
                        font-weight: 700;
                        line-height: 1.1em;
                        color: #ffffff;
                        margin: 0;
                    }

                    & h2 {
                        font-weight: 500;
                        text-transform: uppercase;
                        color: #ffffff;
                        margin: 0;
                    }

                    & p {
                        color: #e0e0e0;
                        font-size: 15px;
                        line-height: 25px;
                    }
                }
            `}
        ></Global>
    );
};

export default GlobalStyles;
