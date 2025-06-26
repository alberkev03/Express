const backData = document.querySelector('#backend-data')
const backFilter = document.querySelector('.backend-filter')
const filterForm = document.querySelector('#filter-by-id')
const filterName = document.querySelector('#name')

const list = document.createElement('ul')

function showAllData () {
    fetch ('http://localhost:3001/api/books')
        .then(response => response.json())
        .then(data => {
        backData.append(list)
        data.payload.forEach(b => {
            console.log(b);
            const listUnit = document.createElement('li')
            listUnit.innerHTML = `<li>Libro: ${b.nombre}</li>
                                <li>Autor: ${b.autor}</li>
                                <li>Páginas: ${b.paginas}</li>
                                <br>`
            list.append(listUnit)
    })})
}

filterForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    backFilter.innerHTML = showDataById(Number(filterName.value))
})

function showDataById (id) {
    fetch (`http://localhost:3001/api/books/find/${id}`)
    .then (response => response.json())
    .then (data => {
            data.payload.forEach(b => {
            backFilter.innerHTML = `<div>
                                        <li>Libro: ${b.nombre}</li>
                                        <li>Autor: ${b.autor}</li>
                                        <li>Páginas: ${b.paginas}</li>
                                    </div>`
            })
    })
}