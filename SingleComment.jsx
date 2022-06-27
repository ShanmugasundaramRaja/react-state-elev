import ListGroup from "react-bootstrap/ListGroup";

const SingleComment = ({ comment }) => (
  <ListGroup.Item>{comment.comment}</ListGroup.Item>
);

export default SingleComment;