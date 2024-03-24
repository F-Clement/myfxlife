import React, { useEffect, useState } from "react";

import Draft from "./Draft";
import Asset from "../../components/Asset";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";


function DraftPage({ message = "" }) {
  const [drafts, setDrafts] = useState({ results: [] });


  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const { data } = await axiosReq.get(`/drafts/`);
        setDrafts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDrafts();
  }, []);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
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
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default DraftPage;





// import React, { useState, useEffect } from "react";

// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import Post from "./Post";
// import Asset from "../../components/Asset";
// import NoResults from "../../assets/no-results.png";
// import appStyles from "../../App.module.css";
// import styles from "../../styles/PostsPage.module.css";
// import { axiosReq } from "../../api/axiosDefaults";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";

// function DraftPage({ message, filter = "" }) {

//     const [drafts, setDrafts] = useState({ results: [] });
//     const [hasLoaded, setHasLoaded] = useState(false);
//     const {pathname} = useLocation();
//     const currentUser = useCurrentUser();
  
//     const [query, setQuery] = useState("");
  
//     useEffect(() => {
//       const fetchDrafts = async () => {
//         try {
//           const { data } = await axiosReq.get(`/drafts/?${filter}search=${query}`);
//           setDrafts(data);
//           setHasLoaded(true);
//         } catch (err) {
          
//         }
//       };
  
//       setHasLoaded(false);
//       const timer = setTimeout(() => {
//         fetchDrafts();
//       }, 1000);
  
//       return () => {
//         clearTimeout(timer);
//       };
  
//     }, [filter, query, pathname, currentUser]);
  
  
//     return (
//       <div>
  
//         <Container>
//           <Row  className="justify-content-md-center">
//             <i className={`fas fa-search ${styles.SearchIcon}`} />
//             <Form
//               className={styles.SearchBar}
//                 onSubmit={(event) => event.preventDefault()}
//               >
//                 <Form.Control
//                   value={query}
//                   onChange={(event) => setQuery(event.target.value)}
//                   type="text"
//                   className="mr-sm-2"
//                   placeholder="Search posts"
//                 />
//             </Form>
//           </Row>
//           <Row className="justify-content-md-center">
//           <a href="/create/post"><button>Add Draft</button></a>
//           </Row>
            
//           <Row className="justify-content-md-center">
//             <Col className="py-2 p-0 p-lg-2" lg={10}>
//               {hasLoaded ? (
//                 <>
//                   {drafts.results.length ? (
//                     drafts.results.map((draft) => (
//                       <Post key={draft.id} {...draft} setDrafts={setDrafts} />
//                     ))
//                   ) : (
//                     <Container className={appStyles.Content}>
//                       <Asset src={NoResults} message={message} />
//                     </Container>
//                   )}
//                 </>
//               ) : (
//                 <Container className={appStyles.Content}>
//                   <Asset spinner />
//                 </Container>
//               )}
//             </Col>
//           </Row>         
//         </Container>
//       </div>
//     );
//   }

// export default DraftPage