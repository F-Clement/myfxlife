import React from 'react'
import styles from "../../styles/Post.module.css";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Avatar from "../../components/Avatar";

const Draft = (props) => {
    const {
        id,
        owner,
        title,
        content,
        image,
        updated_at,
      } = props;
    

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
            {owner}
            <div className="d-flex align-items-center">
                <span>{updated_at}</span>
                {"..."}
           </div>
        </Media>
      </Card.Body>
      <Link to={`/drafts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>  
    </Card>
  )
}

export default Draft