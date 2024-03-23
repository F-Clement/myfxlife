import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Draft from "./Draft";

function DraftPost() {
  const { id } = useParams();
  const [draft, setDraft] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: draft }] = await Promise.all([
          axiosReq.get(`/drafts/${id}`),
        ]);
        setDraft({ results: [draft] });
        console.log(draft);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row  className="justify-content-md-center">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <Draft {...draft.results[0]} DraftPost />
      </Col>
    </Row>
  );
}

export default DraftPost;