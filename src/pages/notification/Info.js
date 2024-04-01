import React from 'react'
import styles from "../../styles/Post.module.css";

import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DraftDropdown } from '../../components/DraftDropdown';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';

const Info = (props) => {
    const {
        id,
        owner,
        title,
        content,
        updated_at,
      } = props;
    
  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
            {owner}
            {/* <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {<DraftDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                /> 
              }
           </div> */}
        </Media>
      </Card.Body>
      <Link to={`/notifications/${id}`}>
        {/* <Card.Img src={image} alt={title} /> */}
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>  
    </Card>
  )
}

export default Info