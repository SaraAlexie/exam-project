/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useContext } from "react";
import { DimensionContext } from "../contexts/DimensionContext";
import axios from "axios";

const Sandbox = () => {
    const center = css`
        text-align: center;
    `;

    const [events, setEvents] = useState();
    const { dimension } = useContext(DimensionContext);

    useEffect(() => {
        axios(`http://localhost:4000/events`).then((response) =>
            setEvents(response.data)
        );
    }, []);

    return (
        <>
            <h1 css={center}>Sandbox</h1>
        </>
    );
};

export default Sandbox;
