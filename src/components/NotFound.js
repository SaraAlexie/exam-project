/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import StyledHeading from "../styles/StyledHeading";
import Banner from "./Banner";

const NotFound = () => {
    const center = css`
        text-align: center;
    `;

    const backgroundImg = css`
        background-image: url("./assets/patern/laser.gif");
    `;

    const linkStyle = css`
        text-decoration: none;
    `;

    const divMargin = css`
        padding: 5rem 0;
    `;

    return (
        <section css={center}>
            <div css={backgroundImg}>
                <Banner title={"Page not found"} />
                <Link css={linkStyle} to="/">
                    <div css={divMargin}>
                        <StyledHeading title={"Take me to home page"} />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
