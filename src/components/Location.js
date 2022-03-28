/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Location = () => {
    const heading = css`
        color: #ff2a70;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 1em;
    `;

    return (
        <section>
            <img src="./assets/Logo.png" alt="Logo" />
            <article>
                <h3 css={heading}>Location</h3>
                <p>
                    PO Box 16122 Collins Street, West Victoria, 8007 Australia
                </p>
            </article>
            <article>
                <h3 css={heading}>Opnening hours</h3>
                <p>MON-FRI 9 AM TO 10 PM</p>
            </article>
            <article>
                <h3 css={heading}>Location</h3>
                <p>MON-FRI 2 PM TO 6 PM</p>
            </article>
        </section>
    );
};

export default Location;
