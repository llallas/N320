class Book {
  #owner = "";
  pages = 0;

  constructor(pages) {
    this.pages = pages;
  }

  getPages() {
    return `This book has ${this.pages} pages`;
  }

  setNewOwner(setNewOwner) {
    this.#owner = setNewOwner;
  }
}

const myBook = new Book(25);

console.log("My Book Pages:", myBook.pages);

console.log("My Book getPages:", myBook.getPages); // This book has 25 pages
