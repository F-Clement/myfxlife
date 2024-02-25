import React, {useState, useEffect} from 'react'
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { axiosReq } from '../api/axiosDefaults';
import Asset from './Asset';

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
          "/likes/?ordering=-likes_count"
        );
        setLikeData((prevState) => ({
          ...prevState,
          molstlikes: data,
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
          {mostLikes.results.map((like) => (
            <p key={like.id}>{like.post}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  )
}

export default LikePosts