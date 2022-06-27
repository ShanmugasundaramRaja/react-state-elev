import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from './CommentArea'
import CommentList from "./CommentList";

class SingleBookComponent  extends Component{
    state = {
            selected: false
        }
    render(){
    return (
      <>
        <Card key={this.props.book.ASIN} onClick={()=>this.setState({selected: !this.state.selected})}
        style={{border:this.state.selected ? '10px solid yellow' : 'none '}}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{color:"black"}}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        </>
      );
}}

export default SingleBookComponent