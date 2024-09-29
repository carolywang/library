const myLibrary = [];
let runningBookArr = [];

// constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// take user's input and store the new book objects into an array
function addBookToLibrary(newBook) {
  runningBookArr.push(newBook);
  myLibrary.push(newBook);
}

const book1 = new Book("The great gatsby", "F. Scott Fitzgerald", 208, "read");
const book2 = new Book(
  "The unbearable lightness of being",
  "Milan Kundera",
  320,
  "not read"
);
const book3 = new Book("Norwegian wood", "Haruki Murakami", 296, "read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
console.log(runningBookArr);
console.log(myLibrary);

// function to loop through the array and display each book on the page
function displayBooks(book) {
  // append card
  const bookCard = document.createElement("div");
  bookCard.className = "card";
  document.getElementById("container").appendChild(bookCard);
  // append book title to card
  const title = document.createElement("p");
  title.innerText = `Book: ${book.title}`;
  bookCard.appendChild(title);
  // append author name to card
  const author = document.createElement("p");
  author.innerText = `Author: ${book.author}`;
  bookCard.appendChild(author);
  // append number of pages to card
  const pages = document.createElement("p");
  pages.innerText = `Pages: ${book.pages}`;
  bookCard.appendChild(pages);
  // append read status to card
  const readStatus = document.createElement("p");
  readStatus.innerText = `Read status: ${book.readStatus}`;
  bookCard.appendChild(readStatus);
}
myLibrary.map((book) => displayBooks(book));

// add new book
const addBookButton = document.querySelector("button");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
const submit = document.querySelector(".submit");
// click add new book button to bring up a form
addBookButton.addEventListener("click", () => {
  dialog.showModal();
});
// close button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
// submit book info and add card
submit.addEventListener("click", (e) => {
  e.preventDefault();
  runningBookArr = [];
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read-status").value;
  const newBook = new Book(title, author, pages, readStatus);
  addBookToLibrary(newBook);
  dialog.close();
  document.getElementById("form").reset();
  runningBookArr.map((book) => displayBooks(book));
});
