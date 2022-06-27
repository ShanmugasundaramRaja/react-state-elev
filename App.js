import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import fantasy from './Data/fantasy.json'
import BookList from './Components/BookList';
import CommentArea from './Components/CommentArea';
import { Component } from 'react';

class App extends Component {
  state = {
    asin: null
  }
  BookHandle = (asin) =>{
    this.setState({asin: asin},
      console.log(this.state.asin))
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-8">
        <BookList Books={fantasy} asin={this.state.asin} BookHandle={this.BookHandle}/>
        </div>
        <div id='comment' className="col-4">
          <CommentArea asin={this.state.asin}/>
        </div>
        </div>
      </header>
    </div>
  );
}
}
export default App;