import React from 'react'
import Hero from '../assets/myfx.jpg'
import Pairs from '../assets/pairs.png'
import { Container, Row, Col } from 'react-bootstrap'
const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
          <img src={Hero} alt='Hero Image' />
          </Col>
          <Col sm={4}>
          <img src={Pairs} alt='Currency Pairs' height='344' />
          </Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home