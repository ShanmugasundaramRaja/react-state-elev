import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE1ZDRlMzMzODEzZjAwMTUwZGRkZjkiLCJpYXQiOjE2NTYzMjk5MjIsImV4cCI6MTY1NzUzOTUyMn0.qwDB6MvOAHSKya-QrmHEDnamtYsae-PKqhtVxEyHzn8",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
);

export default SingleComment;