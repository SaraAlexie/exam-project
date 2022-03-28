/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { DateContext } from "../contexts/DateContext";
import axios from "axios";
import SubmitBtn from "./SubmitBtn";
import InvisiLabel from "../styles/InvisiLabel";

const validationSchema = {
    name: {
        required: "Please type your name",
        minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
        },
    },
    email: {
        required: "Please type your e-mail",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please type a valid email adress",
        },
    },
    comment: {
        required: "Please type a comment",
        minLength: {
            value: 3,
            message: "A comment must be at least 3 characters",
        },
    },
};

const ContactForm = () => {
    const form = css`
        width: 100%;
        padding-right: 1.5em;
    `;

    const inputField = css`
        width: 100%;
        background-color: #030203;
        color: #e0e0e0;
        height: 2.5em;
        margin-bottom: 2em;
        border: 1px solid #e0e0e0;
        ::placeholder {
            color: #e0e0e0;
            padding-left: 1em;
        }
    `;

    const inputComment = css`
        width: 100%;
        background-color: #030203;
        color: #e0e0e0;
        height: 20em;
        margin-bottom: 2em;
        border: 1px solid #e0e0e0;
        ::placeholder {
            color: #e0e0e0;
            font-size: 15px;
            font-family: "Ubuntu", sans-serif;
            padding-left: 1em;
            position: absolute;
            top: 4%;
        }
    `;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [thanks, setThanks] = useState();
    const { date } = useContext(DateContext);

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(`http://localhost:4000/contact_messages`, {
                name: data.name,
                email: data.email,
                content: data.comment,
                date: date,
            })
            .then(setThanks("Thank you for the message. We will be in touch."));
    };

    return (
        <form css={form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InvisiLabel htmlFor="name" title="Name" />
                <input
                    css={inputField}
                    type="text"
                    placeholder="Your Name"
                    {...register("name", validationSchema.name)}
                />
                {errors?.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <InvisiLabel htmlFor="email" title="Email" />
                <input
                    css={inputField}
                    type="email"
                    placeholder="Your Email"
                    {...register("email", validationSchema.email)}
                />
                {errors?.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <InvisiLabel htmlFor="website" title="Website" />
                <input
                    css={inputField}
                    type="text"
                    placeholder="Your Website (optional)"
                />
            </div>
            <div>
                <InvisiLabel htmlFor="comment" title="Comment" />
                <textarea
                    css={inputComment}
                    type="text"
                    placeholder="Your comment"
                    {...register("comment", validationSchema.comment)}
                />
                {errors?.comment && <p>{errors.comment.message}</p>}
            </div>
            <SubmitBtn title="submit" type="submit" />
            {thanks && <p>{thanks}</p>}
        </form>
    );
};

export default ContactForm;
