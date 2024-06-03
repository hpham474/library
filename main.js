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
        book.style.height = "10 rem";
        book.style.width = "10 rem";
        book.style.border = "black solid 1px";
        book.textContent = myLibrary[i].title;

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

//displayLibrary();
