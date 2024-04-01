import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import CreateNotification from "./CreateNotification";

function NotificationPage() {
  const [info, setInfo] = useState({results: []});

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={6}>
        <p>My Notifications</p>
        {/* <Container className={appStyles.Content}>
          Comments
        </Container> */}
      </Col>
      <Col>
        <CreateNotification />
      </Col>
      {/* <Col lg={6} className="d-none d-lg-block p-0 p-lg-2">
        <CreateNotification />
      </Col> */}
    </Row>
  );
}

export default NotificationPage;