let bookArray = [];

const addNewButton = document.getElementById('btnAddNew');
const closeModalButton = document.getElementById('close-modal');
const buttonSubmit = document.getElementById('modal-submit-button');
const titleInput = document.getElementById('title-field');
const authorInput = document.getElementById('author-field');
const pagesInput = document.getElementById('pages-field');
const readInput = document.getElementById('read-field');
const deleteButton = document.getElementById('deleteButton');



const toggleRead = function(e){
    console.log(e);
}

buttonSubmit.addEventListener('click', handleForm);

function addPlaceHolders() {
    addNewBook("Catch-22", "Joseph Heller", 412, "Yes");
    addNewBook("Slaughterhouse Five", "Kurt Vonnegut", 391, "Yes");
    addNewBook("Maximum Boost", "Corky Bell", 482, "Yes");
    arrayAdder();
}




const addNewBook = function(title, author, pages, read) {
    args = arguments;
    let a = new Book(args[0], args[1], args[2], args[3]);
    bookArray.push(a);
   
}


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


addNewButton.addEventListener('click', modalToggle);
closeModalButton.addEventListener('click', modalToggle);


function modalToggle() {
    const modBackground = document.getElementById('modal-wrapper');
    const modal = document.getElementById('add-new-modal');

    modBackground.classList.toggle('hide');
    modal.classList.toggle('hide');
};


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};



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
                        `<p> Read: ${book.read} </p>` +
                        `<button class="readButton" id="${index}">Toggle Read</button>` +
                        `<button class="deleteButton" id="${index}">Delete</button>`
                        ;

    
    wrapper.appendChild(newCard);
};



arrayAdder = function() {  
    bookArray.forEach((book, index) => { 
          displayBook(book, index)
    
    });
};

function clearDivs() {
    cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
    });
    
};

addPlaceHolders();



function deleteButtonsClick(e) {
    const target = e.target.id;
    const targetButton = e.target.className;
    console.log(target);
    console.log(targetButton);
    
    if( targetButton == "deleteButton" ) {
        bookArray.splice(target, 1);
        console.log(bookArray);
        clearDivs();
        arrayAdder();
    };
};

const deleteButtons = document.getElementsByClassName('deleteButton');

deleteButtonsArray = Array.from(deleteButtons);

deleteButtonsArray.forEach(button => addEventListener('click', deleteButtonsClick))


