import React, { useEffect, useState } from "react";

import Draft from "./Draft";
import Asset from "../../components/Asset";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";


function DraftPage({ message = "" }) {
  const [drafts, setDrafts] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/drafts/`);
        setDrafts(data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);
  
  return (
    <Row className="justify-content-md-center">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <center><h4>My Draft Signals</h4></center>
        <>
          {drafts.results.length ? (
            drafts.results.map((draft) => (
              <Draft key={draft.id} {...draft} setDrafts={setDrafts} />
            ))
          ) : (
            <Container className={appStyles.Content}>
              <Asset src={NoResults} message={message} />
            </Container>
          )}
        </>
      </Col>
    </Row>
  );
}

export default DraftPage;