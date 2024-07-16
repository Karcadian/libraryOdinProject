const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Create a new book object based off the content of the book. Add it to the library collection. Display the books once the book has been added.
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    // Grab the div of which we are putting our book content in
    const bookList = document.getElementById('book-list');
    // Reset the content everytime we call displayBooks()
    bookList.innerHTML = '';

    // For each book, apply CSS to the book, add to the div, and finally add to bookList.
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readLabel = document.createElement('label');
        readLabel.textContent = 'Read:';

        const readCheckbox = document.createElement('input');
        readCheckbox.type = 'checkbox';
        readCheckbox.checked = book.read;
        
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(readLabel);
        bookDiv.appendChild(readCheckbox);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1)
            displayBooks();
        });


        bookDiv.appendChild(removeButton);
        bookList.appendChild(bookDiv);
    });
}


document.getElementById('new-book-button').addEventListener('click', () => {
    document.getElementById('book-form').style.display = 'block';
});

document.getElementById('book-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);

    document.getElementById('book-form').reset();
    document.getElementById('book-form').style.display = 'none';
});

// Adding some initial books for testing
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 309, false);
