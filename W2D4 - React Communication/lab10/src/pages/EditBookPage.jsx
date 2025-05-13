import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { EditBook } from "../components/EditBook";
import { useBookContext } from "../context/BookContext";

export default function EditBookPage() {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const { getBookById } = useBookContext();

  async function getOneBook() {
    let result = await getBookById(id);
    console.log(result.data);
    setBook(result.data);
  }

  useEffect(() => {
    getOneBook();
  }, []);
  console.log(id);
  return (
    <div>
      <EditBook book={book} />
    </div>
  );
}
