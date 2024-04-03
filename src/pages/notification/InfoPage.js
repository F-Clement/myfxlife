import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Info from "./Info";

function InfoPage() {
  const { id } = useParams();
  const [info, setInfo] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: info }] = await Promise.all([
          axiosReq.get(`/notifications/${id}`),
        ]);
        setInfo({ results: [info] });
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row className="justify-content-md-center">
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        <Info {...info.results[0]} InfoPage />
      </Col>
    </Row>
  );
}

export default InfoPage;
