/* 
 ### Buscando e contando dados em Arrays ### 

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        - Contar o número de categorias e o número de livros em cada categoria
        - Contar o número de autores
        - Mostrar livros do autor Augusto Cury
        - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [

    {
        category: "Riqueza",
        books: [

            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, filho pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [

            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamete eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length // variable that gives me the total amount of books inside booksByCategory

console.log(totalCategories); // shows on the console how many categories there are
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category) // gives me the name of the category and the amount of books in it
    console.log(category.books.length)
}

// count the number of authors
function countAuthors() {
    let authors = []; // we are creating an empty array so we can put the authors in it 

    // each author found in the following loop will be added in the authors array
    for (let category of booksByCategory) { // this first loop only gets the category
        for (let book of category.books) { // this second loop gets the books in each category; also cetegory.books is and array and we're taking an object from it and putting it in book 
            if (authors.indexOf(book.author) == -1) { // i dont really understand this part, i should ask someone about it    
                authors.push(book.author) // .push will take the object and put it in authors array?
            }
        }
    }
    console.log("Total de autores: ", authors.length) // will show on the console the amount of authors 
}

countAuthors(); // never forget to call the function otherwise you won't be able to see a thing!

function booksByAugustoCury() {
    let books = []; // we are creating an empty array so we can put the title of the book

    // each book by augusto curry found in the following loop will be added in the books array
    for (let category of booksByCategory) { // this first loop only gets the category
        for (let book of category.books) { // this second loop gets the books in each category; also cetegory.books is and array and we're taking an object from it and putting it in book 
            if (book.author === "Augusto Cury") { // if the author is Augusto Curry we'll take that object aka book title and put it in the empty array called books
                books.push(book.title)
            }

        }
    }
    console.log("Livros do autor: ", books) // will show on the console the title of the books
}
booksByAugustoCury();

// in this case i will choose which author to show their books title
function booksByAuthor(author) {
    let books = []; // we are creating an empty array so we can put the title of the book

    // each book by the author you choose found in the following loop will be added in the books array
    for (let category of booksByCategory) { // this first loop only gets the category
        for (let book of category.books) { // this second loop gets the books in each category; also cetegory.books is and array and we're taking an object from it and putting it in book 
            if (book.author === author) { // we'll take that object aka book title by the chosen author and put it in the empty array called books
                books.push(book.title)
            }

        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`) // will show on the console the title of the books; `` is called template literals, in this case it is transforming an array into a string, using .join we can add a separator ", " a comma and space between the titles 
}
booksByAuthor("Augusto Cury");
booksByAuthor("T. Harv Eker");
booksByAuthor("Robert T. Kiyosaki") // only works with the whole name, even if the book has two authors
booksByAuthor("Robert T. Kiyosaki e Sharon L. Lechter")