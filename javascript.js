let myLibrary = [];
let booksContainer = document.getElementById('books_container');
let addBtn = document.getElementById('add-btn');
let addBookBtn = document.getElementById('add-book-btn');
let formDiv = document.getElementById('form-div');
let closeBtn = document.getElementById('close-btn');

// Manually add books to library to test it.
// addBookToLibrary(new Book('America', 'Franz Kafka', 255))
// addBookToLibrary(new Book('El castillo', 'Franz Kafka', 369))

// When add button is pressed get book input values and create book
addBtn.addEventListener('click', getBookInput);

// When Close button is pressed hide form
closeBtn.addEventListener('click', function() {
    formDiv.style.display = 'none';
});

// When Add Book button is pressed show form
addBookBtn.addEventListener('click', function() {
    formDiv.style.display = 'block';
});

function Book(title, author, num_pages) {
    this.title = title; 
    this.author = author;
    this.num_pages = num_pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    addBookToContainer(book);
}

function addBookToContainer(book) {
    let div_book = document.createElement('div');
    div_book.className = 'col-md-3 book-container';
    div_book.dataset.book_index = myLibrary.length - 1;

    let title_book = document.createElement('p');
    let author_book = document.createElement('p');
    let num_pages_book = document.createElement('p');
    let remove_btn = document.createElement('input');

    title_book.textContent = book.title;
    author_book.textContent = book.author;
    num_pages_book.textContent = book.num_pages;
    remove_btn.value = 'Remove book';

    remove_btn.className = 'btn btn-danger';
    remove_btn.type = 'button';
    remove_btn.onclick = removeBook.bind(this, div_book.dataset.book_index);

    div_book.appendChild(title_book);
    div_book.appendChild(author_book);
    div_book.appendChild(num_pages_book);
    div_book.appendChild(remove_btn);

    booksContainer.appendChild(div_book);
}

function getBookInput() {
    let titleInput = document.getElementById('titleInput').value;
    let authorInput = document.getElementById('authorInput').value;
    let numPagesInput = document.getElementById('numPagesInput').value;

    let book = new Book(titleInput, authorInput, numPagesInput);
    addBookToLibrary(book);
}

function removeBook(value) {
    bookDiv = document.querySelector(`[data-book_index]`);
    bookDiv.remove();
    myLibrary.splice(value, 1);
}