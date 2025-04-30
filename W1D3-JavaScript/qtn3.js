let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];

function addBook(title, author, ID) {
  libraryBooks.push({ title, author, ID });
}

(function printBooks() {
  console.log("Library Books: \n___________________________");

  libraryBooks.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, ID: ${book.ID}`);
  });
})();
