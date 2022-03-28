/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { Animated } from "react-animated-css";

const HeroImage = () => {
    const location = useLocation();

    const wrapper = css`
        position: relative;
        display: ${location.pathname === "/" ? "block" : "none"};
    `;

    const heroImg = css`
        width: 100%;
    `;

    const logoAnimate = css`
        position: absolute;
        top: 50%;
        left: 35%;
    `;

    const logo = css`
        width: 20em;
    `;

    const images = [
        "./assets/bg/header_bg_2.jpg",
        "./assets/bg/header_bg_3.jpg",
    ];

    const image = images[Math.floor(Math.random() * images.length)];

    return (
        <div css={wrapper}>
            <img css={heroImg} src={image} alt="Hero header" />
            <Animated
                animationIn="flipInX"
                animationInDuration={1500}
                css={logoAnimate}
            >
                <img css={logo} src="./assets/Logo.png" alt="Logo" />
                <Animated animationIn="fadeIn" animationInDelay={800}>
                    <img src="./assets/bottom_line2.png" alt="Underline" />
                </Animated>
            </Animated>
        </div>
    );
};

export default HeroImage;

/*const images = [
    {
        image: "./assets/bg/header_bg_2.jpg",
    },
    {
        image: "./assets/bg/header_bg_3.jpg",
    },
];

const image = images[Math.floor(Math.random() * images.length)];*/
