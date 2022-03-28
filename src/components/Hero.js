/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeroImage from "./HeroImage";

const Hero = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }, []);

    const loader = css`
        width: 100%;
        height: 100vh;
        display: ${location.pathname === "/" ? "block" : "none"};
    `;

    const loaderGif = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    return visible ? (
        <div css={loader}>
            <img
                css={loaderGif}
                src="./assets/loader/madbars.gif"
                alt="Loading page"
            />
        </div>
    ) : (
        <HeroImage />
    );
};

export default Hero;
