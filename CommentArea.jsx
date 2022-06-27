import { Component } from "react";
import CommentList from "./CommentList";
import '../App.css'
class CommentArea extends Component{
 state = {
        comments: []
    }
    componentDidUpdate = async (oldProps, oldState) =>{

        
        if(oldProps.asin !== this.props.asin){
        try{
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.asin, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE1ZDRlMzMzODEzZjAwMTUwZGRkZjkiLCJpYXQiOjE2NTYzMjk5MjIsImV4cCI6MTY1NzUzOTUyMn0.qwDB6MvOAHSKya-QrmHEDnamtYsae-PKqhtVxEyHzn8"
            }
            })
            let comments = await response.json()
            this.setState({comments: comments})
            console.log(this.state.comments)
           
    } catch(error)
            {console.log("there was an"+error+"error")}}else{console.log("nope")}}

render(){
    if(this.state.comments.length>0){
    return(
        <div style={{color:'black', backgroundColor: 'white'}}>
           <CommentList commentsToShow={this.state.comments}/>
        </div>
    )}else{
        return(
        <div style={{color:'black', height:'200px', backgroundColor: 'white'}}>
           No Comment
        </div>)
    }}

}
export default CommentArea