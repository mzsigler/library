
// array for all the books
let bookArray = [];

// buttons and forms constants.
const addNewButton = document.getElementById('btnAddNew');
const closeModalButton = document.getElementById('close-modal');
const buttonSubmit = document.getElementById('modal-submit-button');
const titleInput = document.getElementById('title-field');
const authorInput = document.getElementById('author-field');
const pagesInput = document.getElementById('pages-field');
const readInput = document.getElementById('read-field');
const deleteButton = document.getElementById('deleteButton');


// This just pops up the modal when the button is clicked and closes it when done.

addNewButton.addEventListener('click', modalToggle);
closeModalButton.addEventListener('click', modalToggle);

// Defining my book object.
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};


// Fix me!
const toggleRead = function(e){
    console.log(e);
}


// This just adds in some placeholder books so that it's not just blank when you open it.

function addPlaceHolders() {
    addNewBook("Catch-22", "Joseph Heller", 412, "Yes");
    addNewBook("Slaughterhouse Five", "Kurt Vonnegut", 391, "Yes");
    addNewBook("Maximum Boost", "Corky Bell", 482, "Yes");
    arrayAdder();
}



// Function to add new books to the array, used to add placeholders.. 

const addNewBook = function(title, author, pages, read) {
    args = arguments;
    let a = new Book(args[0], args[1], args[2], args[3]);
    bookArray.push(a);
   
}

// form button event listener and associated function. 

buttonSubmit.addEventListener('click', handleForm);

function handleForm() {
    let tit = titleInput.value;
    let auth = authorInput.value;
    let pag = pagesInput.value;
    let red = readInput.value;

    let a = new Book(tit, auth, pag, red);

    clearDivs();
    bookArray.push(a)
    clearFields();
    modalToggle();
    arrayAdder();

    
}

function clearFields() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
}



function modalToggle() {
    const modBackground = document.getElementById('modal-wrapper');
    const modal = document.getElementById('add-new-modal');

    modBackground.classList.toggle('hide');
    modal.classList.toggle('hide');
};




// This makes the divs and gives them unique identifiers and such. 

function displayBook(book, index) {
    let title = book.title;
    titleLower = title.toLowerCase();
    titleClass = titleLower.replace(/\s+/g, '');
    const wrapper = document.getElementById("wrapper");
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.classList.add(titleClass)
    newCard.classList.add(index);
    newCard.innerHTML = `<h2>  ${book.title} </h2>` +
                        `<p> By: ${book.author} </p>` +
                        `<p> Pages: ${book.pages} </p>` +
                        `<p class="read-status"> Read: ${book.read} </p>` +
                        `<button class="readButton" id="${index}">Toggle Read</button>` +
                        `<button class="deleteButton" id="${index}">Delete</button>`
                        ;

    
    wrapper.appendChild(newCard);
};


// Adds each book in the array to the page by running it through the displayBook function.
arrayAdder = function() {  
    bookArray.forEach((book, index) => { 
          displayBook(book, index)
    
    });
};

// Clears divs before adding from array. Otherwise you get duplicates. 
function clearDivs() {
    cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
    });
    
};

// Function call to insert the placeholder books.
addPlaceHolders();


function deleteButtonsClick(e) {
    const target = e.target.id;
    const targetButton = e.target.className;
    
    if( targetButton == "deleteButton" ) {
        bookArray.splice(target, 1);
        clearDivs();
        arrayAdder();
    };
};

function readButtonClick(e) {
    const book = e.target.id;
    if (bookArray[book].read == "Yes" || bookArray[book].read == "yes") {
        bookArray[book].read = "No";
    } else {
        bookArray[book].read = "Yes";
    }
    
    clearDivs();
    arrayAdder();

}

const deleteButtons = document.getElementsByClassName('deleteButton');

deleteButtonsArray = Array.from(deleteButtons);

deleteButtonsArray.forEach(button => addEventListener('click', deleteButtonsClick))

const readButtons = document.getElementsByClassName('readButton');
readButtonArray = Array.from(readButtons);

readButtonArray.forEach(button => addEventListener('click', readButtonClick));




