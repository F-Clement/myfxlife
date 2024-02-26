import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;













// import React, { useState } from "react";
// import CommentEditForm from "./CommentEditForm";

// import Form from "react-bootstrap/Form";
// import { axiosRes } from "../../api/axiosDefaults";

// import styles from "../../styles/CommentCreateEditForm.module.css";

// function CommentEditForm(props) {
//   const { id, content, setShowEditForm, setComments } = props;

//   const [formContent, setFormContent] = useState(content);

//   const handleChange = (event) => {
//     setFormContent(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axiosRes.put(`/comments/${id}/`, {
//         content: formContent.trim(),
//       });
//       setComments((prevComments) => ({
//         ...prevComments,
//         results: prevComments.results.map((comment) => {
//           return comment.id === id
//             ? {
//                 ...comment,
//                 content: formContent.trim(),
//                 updated_at: "now",
//               }
//             : comment;
//         }),
//       }));
//       setShowEditForm(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <hr />
//       <Media>
//         <Link to={`/profiles/${profile_id}`}>
//           <Avatar src={profile_image} />
//         </Link>
//         <Media.Body className="align-self-center ml-2">
//           <span className={styles.Owner}>{owner}</span>
//           <span className={styles.Date}>{updated_at}</span>
//           {showEditForm ? (
//             <CommentEditForm />
//           ) : (
//             <p>{content}</p>
//           )}
//         </Media.Body>
//         {is_owner && !showEditForm && (
//           <MoreDropdown
//             handleEdit={() => setShowEditForm(true)}
//             handleDelete={handleDelete}
//           />
//         )}
//       </Media>
//     </>
//   );
// }

// export default CommentEditForm;