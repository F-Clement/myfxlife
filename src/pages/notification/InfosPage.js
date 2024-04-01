import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import CreateNotification from "./CreateNotification";

function InfosPage() {
  const [info, setInfo] = useState({results: []});

  // useEffect(() => {
  //   const handleMount = async () => {
  //     try {
  //       const { data } = await axiosReq.get(`/notifications/`);
  //       setInfo(data);
  //       console.log(info);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   handleMount();
  // }, [info]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>My Notifications</p>
       
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

export default InfosPage;