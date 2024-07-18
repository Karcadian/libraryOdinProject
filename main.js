class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        this.myLibrary.push(book);
        this.displayBooks();
    }

    displayBooks() {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';

        this.myLibrary.forEach((book, index) => {
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

            bookDiv.appendChild(title);
            bookDiv.appendChild(author);
            bookDiv.appendChild(pages);
            bookDiv.appendChild(readLabel);
            bookDiv.appendChild(readCheckbox);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                this.myLibrary.splice(index, 1);
                this.displayBooks();
            });

            bookDiv.appendChild(removeButton);
            bookList.appendChild(bookDiv);
        });
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const myLibrary = new Library();

document.getElementById('new-book-button').addEventListener('click', () => {
    document.getElementById('book-form').style.display = 'block';
});

document.getElementById('book-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    myLibrary.addBookToLibrary(title, author, pages, read);

    document.getElementById('book-form').reset();
    document.getElementById('book-form').style.display = 'none';
});

myLibrary.addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
myLibrary.addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 309, false);
