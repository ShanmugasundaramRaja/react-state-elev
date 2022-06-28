import "./App.css";
import fantasy from "./Data/fantasy.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList books={fantasy} />
      </header>
    </div>
  );
}

export default App;