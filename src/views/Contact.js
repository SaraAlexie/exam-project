/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

const Contact = () => {
    const contactSection = css`
        max-width: 65em;
        margin: 2em auto;
        padding: 2.5 0;
        display: flex;
        justify-content: space-between;
    `;

    return (
        <main>
            <Banner title="contact us" />
            <section css={contactSection}>
                <ContactForm />
                <InfoCard />
            </section>
        </main>
    );
};

export default Contact;
