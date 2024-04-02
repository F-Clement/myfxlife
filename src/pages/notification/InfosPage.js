import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import CreateNotification from "./CreateNotification";
import NoResults from "../../assets/no-results.png";
import Info from "./Info";

function InfosPage({ message = "" }) {
  const [infos, setInfos] = useState({results: []});

  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const { data } = await axiosReq.get(`/notifications/`);
        setInfos(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInfos();
  }, [infos]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>My Notifications</p>
        <>
          {infos.results.length ? (
            infos.results.map((notif) => (
              <Info key={notif.id} {...notif} setInfos={setInfos} />
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