const bookTable = document.querySelector("#books");
const serverHost = "http://localhost:3000";

bookTable.addEventListener('click', (event) => {

    let clickedElement = event.target;
    let type = clickedElement.dataset.type;
    let bookId = clickedElement.dataset.ref;

    switch (type){

        case 'remove':

            fetch(`${serverHost}/books/${bookId}`, { method: 'DELETE'})
                .then( response => {
                    let tr = clickedElement.closest(`#book_${bookId}`);
                    tr.remove();
                })
                .catch(error => console.error(error));

        break;

    }


})