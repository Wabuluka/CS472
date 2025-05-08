import { AddBookForm } from "./components/AddBookForm";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>Book Library</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
}

export default App;
