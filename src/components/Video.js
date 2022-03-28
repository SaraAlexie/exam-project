/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StyledHeading from "../styles/StyledHeading";
import StyledSiteSection from "../styles/StyledSiteSection";

const Video = () => {
    const videoPlayer = css`
        max-width: 100%;
    `;

    return (
        <StyledSiteSection>
            <StyledHeading title="latest video" />
            <video css={videoPlayer} controls src="../assets/media/space.mp4" />
        </StyledSiteSection>
    );
};

export default Video;
