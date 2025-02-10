# My CLI Tool - Book Manager

A simple command-line tool that allows users to **add, list, and manage books** using Node.js.

## **Installation**

You can install the tool globally via **npm**:

```sh
npm install -g my-cli-tool
```

---

## **Usage**

After installation, you can run the tool by typing:

```sh
mycli
```

### ** Main Menu**

When you start the CLI tool, you will see the following menu:

```sh
 Book Manager CLI
1. Add a book
2. List books
3. Exit
Choose an option:
```

You can select an option by entering the corresponding number.

---

### **1️ Adding a Book**

To add a new book, select option `1`. The CLI will ask for the book’s title and author:

```sh
Enter book title: The Hobbit
Enter book author: J.R.R. Tolkien
 Added: "The Hobbit" by J.R.R. Tolkien
```

The book will be saved locally in `books.json`.

---

### **2️ Listing All Books**

To view your book collection, select option `2`. The CLI will display a list of saved books:

```sh
 Book Collection:
1. The Hobbit by J.R.R. Tolkien
2. The Catcher in the Rye by J.D. Salinger
```

If there are no books saved, it will display:

```sh
No books found.
```

---

### **3️ Exiting the CLI**

To exit the CLI tool, select option `3`. This will close the program.

---

## **How It Works**

The CLI tool makes use of Node.js **built-in modules**:

- **`readline`** → Handles user input in the command line
- **`fs` (File System)** → Reads and writes book data to `books.json`
- **`path`** → Manages file paths for cross-platform compatibility

When a book is added:

- The tool checks if `books.json` exists.
- If the file exists, it loads existing books and adds the new one.
- If the file does not exist, it creates a new file and saves the book data.

When listing books:

- It reads `books.json` and displays all saved books in the terminal.

---
