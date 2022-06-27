import Alert from "react-bootstrap/Alert";

const WarningSign = (props) => <Alert variant={props.danger}>{props.text}</Alert>;
export default WarningSign;