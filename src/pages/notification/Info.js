import React from 'react'
import styles from "../../styles/Post.module.css";

import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";

const Info = (props) => {
    const {
        id,
        owner,
        title,
        content,
      } = props;
    
  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {owner}
        </Media>
      </Card.Body>
      <Link to={`/notifications/${id}`}>
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>  
    </Card>
  )
}

export default Info