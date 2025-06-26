import bookService from "../services/bookService.js";
/* I should cover: 
- Get
- Post 
- Delete
- Puth
- Patch */
const books = bookService.fetchAllBooks()

const showAllBooks = (req, res) => {
    res.status(200).json({ status: 200, message: `Libros totales: ${books.length}`, payload: books })
    console.log(books);
}

const filterBook = (req, res) => {
    const { id } = req.params;
    const result = bookService.filterBook(id)
    res.status(result.status).json({status: result.status, message: result.message, payload: result.book})
}
const addBook = (req, res) => {
    const bookContent = req.body;
    const book = bookService.addBook(bookContent)
    res.status(201).json({status: 201, message: `Libro añadido: ${book.body}`, payload: book})
}

const editBook = (req, res) => {
    const body = req.body;
    const {id} = req.params;
    const result = bookService.editBook(id, body)
    res.status(result.status).json({status: result.status, message: result.message, payload: result.updateBook})
}

const deleteBook = (req, res) => {
    const { id } = req.params;
    const result = bookService.deleteBook(id)
    res.status(result.status).json({status: result.status, message: result.message})
}


export default {
    showAllBooks,
    filterBook,
    addBook,
    editBook,
    deleteBook
}