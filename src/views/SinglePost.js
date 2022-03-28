/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from "../components/Comments";
import PostComment from "../components/PostComment";
import Banner from "../components/Banner";
import CantLoad from "../components/CantLoad";
import StyledSiteSection from "../styles/StyledSiteSection";

const SinglePost = () => {
    const postImg = css`
        width: 100%;
    `;

    const postAuthor = css`
        color: #ff2a70;
        font-weight: 100;
    `;

    const { id } = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/blogposts/${id}`).then((response) =>
            setPost(response.data)
        );
    }, [id]);

    return post ? (
        <main>
            <Banner title="blog post" />
            <StyledSiteSection>
                <img css={postImg} src={post.asset.url} alt="Post" />
                <h1>{post.title}</h1>
                <article>
                    <h3 css={postAuthor}>By: {post.author}</h3>
                    <p>{post.content}</p>
                </article>
            </StyledSiteSection>
            <Comments />
            <PostComment />
        </main>
    ) : (
        <CantLoad title="post you are looking for" />
    );
};

export default SinglePost;
