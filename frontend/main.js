const backData = document.querySelector('#backend-data')
fetch ('http://localhost:3001/api/books')
    .then(response => response.json())
    .then(data => {
        const list = document.createElement('ul')
        backData.append(list)
        data.payload.forEach(b => {
            console.log(b);
            const listUnit = document.createElement('li')
            listUnit.innerHTML = `<li>Libro: ${b.nombre}</li>
                                <li>Autor: ${b.autor}</li>
                                <li>Páginas: ${b.paginas}</li>
                                <br>`
            list.append(listUnit)
        })
    })