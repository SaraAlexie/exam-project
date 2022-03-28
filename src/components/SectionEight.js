/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import SubmitBtn from "./SubmitBtn";
import InvisiLabel from "../styles/InvisiLabel";

const validationSchema = {
    email: {
        required: "Please type your e-mail",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please type a valid email adress",
        },
    },
};

const SectionEight = () => {
    const formField = css`
        display: flex;
        margin: 2.5em auto;
        max-width: 23em;
    `;

    const inputField = css`
        background-color: #030203;
        color: #ffffff;
        margin-right: 2em;
        width: 18em;
        height: 2rem;
        border: 2px #ffffff;
        border-style: none none solid none;
        ::placeholder {
            color: #ffffff;
        }
    `;

    const [thanks, setThanks] = useState();

    const onSubmit = (data) => {
        axios
            .post(`http://localhost:4000/newsletters`, data)
            .then(setThanks("Thank you for subscribing"));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <form css={formField} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InvisiLabel htmlFor="email" title="Email" />
                    <input
                        css={inputField}
                        type="email"
                        placeholder="Enter Your Email"
                        {...register("email", validationSchema.email)}
                    />
                    {errors?.email && <p>{errors.email.message}</p>}
                </div>
                <SubmitBtn title="subscribe" type="submit" />
            </form>
            {thanks && <p>{thanks}</p>}
        </>
    );
};

export default SectionEight;
