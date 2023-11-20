let library = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

function addBook(bookId, title, author, price, quantity) {
    library.push([bookId, title, author, price, quantity]);
}

function updateBook(bookId, title, author, price, quantity) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][0] === bookId) {
            library[i] = [bookId, title, author, price, quantity];
            break;
        }
    }
}

function deleteBook(bookId) {
    library = library.filter(book => book[0] !== bookId);
}

function searchBook(key, value) {
    return library.filter(book => book[key] === value);
}

function sellBook(title, quantity, balance) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][1] === title && library[i][4] >= quantity) {
            if (balance >= library[i][3] * quantity) {
                library[i][4] -= quantity;
                return library[i][3] * quantity;
            } else {
                return "Insufficient balance";
            }
        }
    }
    return "Book not available or quantity not sufficient";
}


addBook(6, "The Lean Startup", "Eric Ries", 35.0, 15);
updateBook(1, "Start with Why", "Simon Sinek", 85.0, 10);
deleteBook(3);

console.log(searchBook(1, "Start with Why"));

let totalCost = sellBook("The Lean Startup", 5, 200.0);
console.log("Total Amount:", totalCost);