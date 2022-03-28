/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DateContext } from "../contexts/DateContext";
import axios from "axios";
import InvisiLabel from "../styles/InvisiLabel";
import SubmitBtn from "./SubmitBtn";
import StyledSiteSection from "../styles/StyledSiteSection";

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
        required: "Please write a comment",
        minLength: {
            value: 3,
            message: "A comment must be at least 3 characters",
        },
    },
};

const PostComment = () => {
    const form = css`
        width: 100%;
        height: 100%;
        padding-right: 1.5em;
    `;

    const gridInput = css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1em;
        margin-top: 1em;
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

    const { id } = useParams();
    const [thanks, setThanks] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { date } = useContext(DateContext);

    const onSubmit = (data) => {
        axios
            .post(`http://localhost:4000/comments?blogpostId=${id}`, {
                blogpostId: id,
                name: data.name,
                email: data.email,
                content: data.comment,
                date: date,
                replies: [],
            })
            .then(setThanks("Thank you for your comment"));
        /*setTimeout(() => {
            window.location.reload();
        }, 2500);*/
    };

    return (
        <StyledSiteSection>
            <h2>Leave a comment</h2>
            <form css={form} onSubmit={handleSubmit(onSubmit)}>
                <div css={gridInput}>
                    <div>
                        <InvisiLabel htmlFor="name">Name: </InvisiLabel>
                        <input
                            css={inputField}
                            type="text"
                            placeholder="Your Name"
                            {...register("name", validationSchema.name)}
                        />
                        {errors?.name && <p>{errors.name.message}</p>}
                    </div>
                    <div>
                        <InvisiLabel htmlFor="email">Email: </InvisiLabel>
                        <input
                            css={inputField}
                            type="email"
                            placeholder="Your Email"
                            {...register("email", validationSchema.email)}
                        />
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div>
                    <InvisiLabel htmlFor="comment">Comment: </InvisiLabel>
                    <textarea
                        css={inputComment}
                        type="text"
                        placeholder="Your Comment"
                        {...register("comment", validationSchema.comment)}
                    />
                    {errors?.comment && <p>{errors.comment.message}</p>}
                </div>
                <SubmitBtn title="submit" type="submit" />
            </form>
            {thanks && <p>{thanks}</p>}
        </StyledSiteSection>
    );
};

export default PostComment;
