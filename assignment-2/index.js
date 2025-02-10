const readline = require("readline");
const fs = require("fs");
const path = require("path");

// Create interface for user input
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

// File path to store books
const filePath = path.join(__dirname, "books.json");

// Load books from file
function loadBooks() {
try {
return JSON.parse(fs.readFileSync(filePath));
} catch (error) {
return [];
}
}

// Save books to file
function saveBooks(books) {
fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

// Add a new book
function addBook(title, author) {
const books = loadBooks();
books.push({ title, author });
saveBooks(books);
console.log(\n📖 Book added: "${title}" by ${author});
}

// List all books
function listBooks() {
const books = loadBooks();
if (books.length === 0) {
console.log("\nNo books found.");
} else {
console.log("\n📚 Book List:");
books.forEach((book, index) => {
console.log(${index + 1}. ${book.title} by ${book.author});
});
}
}

// Display menu options
function showMenu() {
console.log("\n📘 Book Manager");
console.log("1. Add a book");
console.log("2. List books");
console.log("3. Exit");

rl.question("\nChoose an option: ", (choice) => {
if (choice === "1") {
rl.question("Enter book title: ", (title) => {
rl.question("Enter book author: ", (author) => {
addBook(title, author);
showMenu();
});
});
} else if (choice === "2") {
listBooks();
showMenu();
} else if (choice === "3") {
console.log("\nGoodbye!");
rl.close();
} else {
console.log("\nInvalid option, try again.");
showMenu();
}
});
}

// Start the application
showMenu();