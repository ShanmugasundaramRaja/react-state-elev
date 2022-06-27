import ListGroup from 'react-bootstrap/ListGroup';

const CommentList=({commentsToShow})=>{
    console.log(commentsToShow)
    return (
        <ListGroup>
            {commentsToShow.map(comment => (
                 <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
            ))}
         
        </ListGroup>
      );
}
export default CommentList