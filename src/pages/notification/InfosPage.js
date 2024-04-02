import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import CreateNotification from "./CreateNotification";

function InfosPage() {
  const [info, setInfo] = useState({results: []});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/notifications/`);
        setInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [info]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>My Notifications</p>
        <>
          {info.results.length ? (
            info.results.map((notif) => (
              <Draft key={notif.id} {...notif} setInfo={setInfo} />
            ))
          ) : (
            <Container className={appStyles.Content}>
              <Asset src={NoResults} message={message} />
            </Container>
          )}
        </>
      </Col>
      <Col>
        <CreateNotification />
      </Col>
    </Row>
  );
}

export default InfosPage;