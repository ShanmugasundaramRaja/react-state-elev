import  Badge  from "react-bootstrap/Badge"
const MyBadge = (props) => 
  (<Badge bg={props.color}>{props.text}</Badge>)

export default MyBadge;