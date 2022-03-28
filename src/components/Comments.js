/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CantLoad from "./CantLoad";
import StyledSiteSection from "../styles/StyledSiteSection";

const Comments = () => {
    const commentList = css`
        padding: 0;
    `;

    const commentContent = css`
        margin-bottom: 2em;
        padding-bottom: 2.5em;
        border-top: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
    `;

    const posted = css`
        color: #ff2a70;
        font-weight: 100;
    `;

    const { id } = useParams();
    const [comments, setComments] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/comments?blogpostId=${id}`).then(
            (response) => setComments(response.data)
        );
    }, [id]);

    return comments ? (
        <StyledSiteSection>
            <h2> {comments ? comments.length + " Comment(s)" : ""}</h2>
            <ul css={commentList}>
                {comments?.map((comment) => (
                    <li css={commentContent} key={comment.id}>
                        <p>
                            {comment.name} -{" "}
                            <span css={posted}>Posted {comment.date}</span>
                        </p>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        </StyledSiteSection>
    ) : (
        <CantLoad title="comments" />
    );
};

export default Comments;
