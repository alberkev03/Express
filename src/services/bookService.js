import books from "../database/data.js";

const fetchAllBooks = () => {
    return books
}
const filterBook = (id) => {
    const book = books.filter(b => b.id === parseInt(id))
    if (id <= books.length) {
        return {
            book,
            status: 200,
            message: "Libro encontrado"
        }
    }
    else {
        return {
            status: 404,
            message: "Libro no encontrado"
        }
    }
    
}
const addBook = (body) => {
    const id = books.length+1;
    const book = Object.assign({id: id}, body);
    books.push(book)
    return book;
}

const editBook = (id, newData) => {
    const book = books.find(b => Number(b.id) === Number(id))
    if (book) {
        const newBook = Object.assign(book, newData)
        books.push(newBook)
        return {
            status: 202,
            message: "Libro actualizado correctamente"
        }
    }
    else {
        return {
            status: 404,
            message: 'Libro no encontrado'
        }
    }
}
const deleteBook = (id) => {
    const index = books.findIndex(b => b.id === parseInt(id))
    if (index !== -1 && Number(index) <= Number(books.length)) {
    books.splice(index, 1)
        return {
            status: 201,
            message: 'Libro eliminado exitosamente'
        }
    }
    else {
        return {
            status: 404,
            message: 'Libro no encontrado'
        }
    }
}

export default {fetchAllBooks, filterBook, addBook, editBook, deleteBook}