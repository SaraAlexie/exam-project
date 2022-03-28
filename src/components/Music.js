import { Carousel } from "react-responsive-carousel";
import StyledHeading from "../styles/StyledHeading";
import StyledSiteSection from "../styles/StyledSiteSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Music = () => {
    return (
        <StyledSiteSection>
            <StyledHeading title="night club track" />
            <Carousel
                dynamicHeight={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={200}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                        justifyContent: "space-between",
                        height: "20em",
                        alignSelf: "end",
                    }}
                >
                    <img src="../assets/content-img/track1.jpg" alt="artist" />
                    <audio
                        src="../assets/media/YouBelongWithMe.mp3"
                        controls
                        poster="../assets/content-img/track1.jpg"
                        style={{
                            width: "100%",
                            height: "11em",
                        }}
                    ></audio>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                        justifyContent: "space-between",
                        height: "20em",
                        alignSelf: "end",
                    }}
                >
                    <img src="../assets/content-img/track2.jpg" alt="artist" />
                    <audio
                        src="../assets/media/YouBelongWithMe.mp3"
                        controls
                        style={{ width: "100%", height: "11em" }}
                    ></audio>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                        justifyContent: "space-between",
                        height: "20em",
                        alignSelf: "end",
                    }}
                >
                    <img src="../assets/content-img/track4.jpg" alt="artist" />
                    <audio
                        src="../assets/media/YouBelongWithMe.mp3"
                        controls
                        style={{ width: "100%", height: "11em" }}
                    ></audio>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "20% 80%",
                        justifyContent: "space-between",
                        height: "20em",
                        alignSelf: "end",
                    }}
                >
                    <img src="../assets/content-img/track5.jpg" alt="artist" />
                    <audio
                        src="../assets/media/YouBelongWithMe.mp3"
                        controls
                        style={{ width: "100%", height: "11em" }}
                    ></audio>
                </div>
            </Carousel>
        </StyledSiteSection>
    );
};

export default Music;
