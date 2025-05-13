import { Link, Route, Routes } from "react-router";
import BookList from "./components/BookList";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";

function App() {
  return (
    <>
      <Link to={"/add"}>Add Book</Link>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        {/* <div className="App">
        <h1>Book Library</h1>
        <AddBookForm />
      </div> */}
      </Routes>
    </>
  );
}

export default App;
