

async function getCategories(count, offset) {
    let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = await response.json()
    return data
    
}

function getClueHtml(clueValue){
    return `<div class="my-category-clue" style="grid-row-start: ${clueValue / 100 + 1}"> $${clueValue} </div>`
}

function getOneCategory(category){
    return `<div class="category"> ${category.title} </div>
            ${getClueHtml(100)}
            ${getClueHtml(200)}
            ${getClueHtml(300)}
            ${getClueHtml(400)}
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="categories">
        ${categories.map(getOneCategory).join('')}
    </div>`
})