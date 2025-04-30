let libraryBooks = [
  { title: "The Roads Ahead", author: "Bill Gates", ID: 3235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

// Add book to the library
function addBook(title, author, ID) {
  libraryBooks.push({ title, author, ID });
}

// Get book titles
function getTitles() {
  let titles = libraryBooks.map((book) => book.title);
  return titles.sort((a, b) => a.localeCompare(b));
}

// find book by keyword in title sorted by ID
function findBooksByKeyword(keyword) {
  let books = libraryBooks.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return books.sort((a, b) => a.ID - b.ID);
}

(function printBooks() {
  addBook("The Hunger Games", "Suzanne Collins", 1234);
  addBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1236);

  console.log("\n\nLibrary Books");
  console.table(libraryBooks);
  console.log("\n\nBook Titles");
  console.table(getTitles());
  console.log("\n\nBooks with keyword 'the'");
  console.table(findBooksByKeyword("road"));
})();
