class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully.`);
        } else {
            console.log("Book already issued.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned.`);
    }
}

// Books Array
const books = [
    new Book("Atomic Habits", "James Clear", "101"),
    new Book("Gita", "Ved Vyas", "102", true),
    new Book("Ikigai", "Hector", "103")
];

// Display available books
console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

// Search by ISBN
function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    book ? book.issueBook() : console.log("Book not found");
}

issueByISBN("103");
