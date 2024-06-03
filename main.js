const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const library = document.querySelector(".library");
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.className="book";

        let title = document.createElement("p");
        let bookTitle = document.createElement("p");
        let author = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let pages = document.createElement("p");
        let bookPages = document.createElement("p");

        title.textContent = "Title:";
        bookTitle.textContent = myLibrary[i].title;
        author.textContent = "Author:";
        bookAuthor.textContent = myLibrary[i].author;
        pages.textContent = "Pages:";
        bookPages.textContent = myLibrary[i].pages;

        let empty = document.createElement("div");

        let container = document.createElement("div");
        container.className="button-container";

        let remove = document.createElement("button");
        remove.textContent = "Remove";
        let status = document.createElement("button");
        status.textContent = "Read";

        container.append(remove);
        container.append(status);

        book.style.display = "grid";
        book.style.gridTemplate = "1fr 1fr 1fr 1fr / 4rem 1fr";

        book.appendChild(title);
        book.appendChild(bookTitle);
        book.appendChild(author);
        book.appendChild(bookAuthor);
        book.appendChild(pages);
        book.appendChild(bookPages);
        book.appendChild(empty);
        book.appendChild(container);

        library.append(book);
    }
}

addBookToLibrary(new Book(
    "Harry Potter and the Sorcerer's Stone",
    "JK Rowling",
    "309",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Chamber of Secret",
    "JK Rowling",
    "341",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Prisoner of Azkaban",
    "JK Rowling",
    "435",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Goblet of Fire",
    "JK Rowling",
    "734",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Order of the Phoenix",
    "JK Rowling",
    "870",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Half-Blood Prince",
    "JK Rowling",
    "652",
    true));

addBookToLibrary(new Book(
    "Harry Potter and the Deathly Hallows",
    "JK Rowling",
    "759",
    true));

displayLibrary();
