import React, {useState, useEffect} from 'react'
import { axiosReq } from '../api/axiosDefaults';
import { Container } from 'react-bootstrap';
import Asset from "../components/Asset";
import NoResults from "../assets/no-results.png";
import appStyles from "../App.module.css";
import {Row, Col} from 'react-bootstrap';
import Post from "../pages/posts/Post";


const LikePosts = ({ message, filter="" }) => {
    

    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    const query = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
            console.log(data)
            setPosts(data);
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        setHasLoaded(false);
        const timer = setTimeout(() => {
          fetchPosts();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
    
    }, [filter, query]);
    
  return (
    <div>
        <Container>
            <Row className="h-100">
              <Col className="py-2 p-0 p-lg-2" lg={8}>
                {/* <p>Popular profiles mobile</p> */}
                {hasLoaded ? (
                  <>
                    {posts.results.length ? (
                      posts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setPosts} />
                      ))
                    ) : (
                      <Container className={appStyles.Content}>
                        <Asset src={NoResults} message={message} />
                      </Container>
                    )}
                  </>
                ) : (
                  <Container className={appStyles.Content}>
                    <Asset spinner />
                  </Container>
                )}
              </Col>
              {/* <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <p>Popular profiles for desktop</p>
              </Col> */}
            </Row>
        </Container>
    </div>
  )
}

export default LikePosts