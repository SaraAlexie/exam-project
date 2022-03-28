/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import SectionSix from "./SectionSix";
import axios from "axios";
import CantLoad from "./CantLoad";

const Testemonials = () => {
    const wrapper = css`
        padding: 2.5em 0;
        background-color: #1a010d;
    `;

    const [testemonies, setTestemonies] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/testimonials`).then((response) =>
            setTestemonies(response.data)
        );
    }, []);

    return testemonies ? (
        <section css={wrapper}>
            <Carousel>
                {testemonies ? (
                    testemonies?.map((testemony) => (
                        <ul key={testemony.id}>
                            <SectionSix testemony={testemony} />
                        </ul>
                    ))
                ) : (
                    <p>Can't load testemonials at the moment...</p>
                )}
            </Carousel>
        </section>
    ) : (
        <CantLoad title="testemonies" />
    );
};

export default Testemonials;
