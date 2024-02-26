import React, {useState, useEffect} from 'react'
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { axiosReq } from '../api/axiosDefaults';
import Asset from './Asset';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LikePosts = () => {

  const [likeData, setLikeData] = useState({
    pageLike: { results: [] },
    mostLikes: { results: [] },
  });
  const { mostLikes } = likeData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/posts/?ordering=-likes_count"
        );
        setLikeData((prevState) => ({
          ...prevState,
          mostLikes: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container className={appStyles.Content}>
      {mostLikes.results.length ? (
        <>
          {mostLikes.results.slice(0, 6).map((post) => (
            <p key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  )
}

export default LikePosts