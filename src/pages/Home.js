import React from 'react'
import Hero from '../assets/myforexlife.png'
import Forex from '../assets/forex.jpg'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
// import styles from '../styles/NavBar.module.css'
import LikePosts from '../components/LikePosts'
const Home = () => {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Hero}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Forex Charts and Pairs</h3>
            <p>Share your success with the world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Forex}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Learn from The Roots</h3>
            <p>A community ready to share knowledge and strategies</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container style={{margin:'4px'}}>
          <Row>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3> Most Like Post </h3>
              <p> Names </p>
              <p> Names </p>
              <p> Names </p>

            </Col>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3>Latest Posts</h3>
              <p> Names </p>
              <p> Names </p>
              <p> Names </p>

            </Col>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3>Most Followed Traders</h3>
              <LikePosts />
              <p> Names </p>
              <p> Names </p>
              <p> Names </p>

            </Col>
          </Row>
      </Container>
    </div>
  )
}

      export default Home