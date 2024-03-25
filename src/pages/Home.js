import React from 'react'
import Hero from '../assets/myforexlife.png'
import Forex from '../assets/forex.jpg'
import News from '../assets/fxnews.png'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import PopularProfiles from './profiles/PopularProfiles'
import LikePosts from '../components/LikePosts'
import Footer from '../components/Footer'

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
            <p>A community ready to share knowledge and strategies</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container style={{margin:'4px'}}>
          <Row>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3> Most Liked Signals </h3>
              <LikePosts />
            </Col>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3>Daily FX News</h3>
              <a href='https://www.forexfactory.com/' target="_blank" rel="noopener noreferrer"><img src={News} alt='Forex News'/></a>
            </Col>
            <Col xs={12} md={4} style={{textAlign:'center'}}>
              <h3>Most Followed Traders</h3>
              <PopularProfiles />
            </Col>
          </Row>
      </Container>
      <Footer />
    </div>
  )
}

      export default Home