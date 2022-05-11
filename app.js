bookArray = [];



function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}. ${this.pages} pages. ${this.read}`;
}


addNewBook = function(title, author, pages, read) {
    args = arguments;
    a = new Book(args[0], args[1], args[2], args[3]);
    bookArray.push(a);
   
}







addNewBook("The Stand", "Stephen King", 4982, "Read");
addNewBook("Catch-22", "Joseph Heller", 412, "Read");
addNewBook("Slaughterhouse Five", "Kurt Vonnegut", 391, "Read");


function displayBook(book) {
    const wrapper = document.getElementById("wrapper");
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `<h2> Title: ${book.title} </h2>` +
                        `<p> Author: ${book.author} </p>` +
                        `<p> Pages: ${book.pages} </p>` +
                        `<p> Read: ${book.read} </p>`;

    
    wrapper.appendChild(newCard);
}



bookArray.forEach(book => {
    displayBook(book);
});

console.table(bookArray);