class Book {
    title;
    author;
    pages;
    read;

    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus () {
        this.read = !this.read;
    }

    get title() {
        return this.title;
    }

    get author() {
        return this.author;
    }

    get pages() {
        return this.pages;
    }

    get read() {
        return this.read;
    }
}

class Library {
    myLibrary = [];

    constructor () {
        this.myLibrary = [];
    }

    get size () {
        return this.myLibrary.length;
    }

    getBook (index) {
        return this.myLibrary[index];
    }


    addBookToLibrary(book) {
        this.myLibrary.push(book);
    }

    displayLibrary() {
        const library = document.querySelector(".library");
        for (let i = 0; i < this.myLibrary.length; i++) {
            let book = this.createBookCard(this.myLibrary[i]);
    
            library.append(book);
        }
    }

    findIndex(event) {
        let titleToChange = 
                event.
                target.
                parentNode.
                parentNode.
                querySelector("p:nth-child(2)").
                textContent;
    
        let authorToChange = 
            event.
            target.
            parentNode.
            parentNode.
            querySelector("p:nth-child(4)").
            textContent;
    
        let index = -1;
        for (let i = 0; i < this.myLibrary.length; i++) {
            if(this.myLibrary[i].title === titleToChange 
                && this.myLibrary[i].author === authorToChange ) {
                index = i;
            }
        }
    
        return index;
    }

    createBookCard(book) {
        let bookCard = document.createElement("div");
        bookCard.className="book";
    
        let title = document.createElement("p");
        let bookTitle = document.createElement("p");
        let author = document.createElement("p");
        let bookAuthor = document.createElement("p");
        let pages = document.createElement("p");
        let bookPages = document.createElement("p");
    
        title.textContent = "Title:";
        bookTitle.textContent = book.title;
        author.textContent = "Author:";
        bookAuthor.textContent = book.author;
        pages.textContent = "Pages:";
        bookPages.textContent = book.pages;
        let bookRead = book.read;
    
        let empty = document.createElement("div");
    
        let container = document.createElement("div");
        container.className="button-container";
    
        let remove = document.createElement("button");
        remove.className="remove-button";
        remove.textContent = "Remove";
        let status = document.createElement("button");
        status.className="read-status-button";
    
        if(bookRead) {
            bookCard.className += " read";
            status.className += " readButton";
            status.textContent = "Unread";
        } else {
            bookCard.className += " unread";
            status.className += " unreadButton";
            status.textContent = "Read";
        }
    
        remove.addEventListener("click", (event) => {
            let index = this.findIndex(event);
    
            this.myLibrary.splice(index, 1);
            
            event.
                target.
                parentNode.
                parentNode.
                remove();
        });
    
        status.addEventListener("click", (event) => {
            let index = this.findIndex(event);
    
            this.myLibrary[index].changeReadStatus();
    
            if(this.myLibrary[index].read) {
                event.
                    target.
                    parentNode.
                    parentNode.
                    className = "book read";
                event.
                    target.
                    className = "read-status-button readButton"
                event.
                    target.
                    textContent = "Unread"
            } else {
                event.
                    target.
                    parentNode.
                    parentNode.
                    className = "book unread";
                event.
                    target.
                    className = "read-status-button readButton"
                event.
                    target.
                    textContent = "Read"
            }
        });
    
        container.append(remove);
        container.append(status);
    
        bookCard.style.display = "grid";
        bookCard.style.gridTemplate = "1fr 1fr 1fr 1fr / 4rem 1fr";
    
        bookCard.appendChild(title);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(author);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(pages);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(empty);
        bookCard.appendChild(container);
    
        return bookCard;
    }
    
}

let myLibrary = new Library();

const dialog = document.querySelector(".book-form");
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove-button");
const closeButton = document.querySelector(".close-form-button");
const submitForm = document.querySelector("form");

addButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let readStatus = document.getElementById("read").checked;

    myLibrary.addBookToLibrary(new Book(
        bookTitle,
        bookAuthor,
        bookPages,
        readStatus
    ));

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    const library = document.querySelector(".library");
    let book = myLibrary.createBookCard(myLibrary.getBook(myLibrary.size - 1));
    library.append(book);

    dialog.close();
});

myLibrary.addBookToLibrary(new Book(
    "Night",
    "Elie Wiesel",
    "116",
    true));

myLibrary.addBookToLibrary(new Book(
    "1984",
    "George Orwell",
    "328",
    true));

myLibrary.addBookToLibrary(new Book(
    "Farenheit 451",
    "Ray Bradbury",
    "156",
    false));

    myLibrary.displayLibrary();
