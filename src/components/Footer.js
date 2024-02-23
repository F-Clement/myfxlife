import React from 'react'
import styles from '../styles/Footer.module.css'
import { Row, Col} from 'react-bootstrap'


const Footer = () => {
  return (
    <div className={styles.Footer} bg="light" expand="md" fixed='bottom'>
        <Row style={{backgroundColor: "lightgray", position: "absolute", fixed:'bottom'}}> 
            <Col>
            <p className={styles.Para}>
                The key to a successful trading lifestyle is DISCIPLINE. You might know a strategy
                that works but if you are not patient enough to wait for those setups to buil then
                will not be successful. Risk management should never be underlooked. Remember it is 
                better to save your money to trade another day than lose it in a "too sure" trade.
            </p>
            </Col>   
        </Row>
    </div>
  )
}

export default Footer