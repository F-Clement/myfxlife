import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";



function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({results: []});

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });



    useEffect(() => {
        const handleMount = async () => {
            try{
                const [{ data: post }, {data: comments}] = await Promise.all([
                    axiosReq.get(`/posts/${id}/`),
                    axiosReq.get(`/comments/?post=${id}`)
                  ]);
                  setPost({ results: [post] });
                  setComments(comments);
            }catch(err){
                console.log(err);
            }
        };
        handleMount();
    }, [id])
  


  return (
    <Row  className="justify-content-md-center">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <p>Popular profiles for mobile</p>
        <Post { ...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
            profile_id={currentUser.profile_id}
            profileImage={profile_image}
            post={id}
            setPost={setPost}
            setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment key={comment.id} {...comment} setPost={setPost} setComments= {setComments}/>
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;