

async function getCategories(count, offset) {
    let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = await response.json()
    return data
    
}

function getClueHtml(clueValue){
    return `<div class="player-clue-100"> $100 </div>`
}

function getOneCategory(category){
    return `<div class="category"> ${category.title} </div>
            <div class="my-category-clue" style="grid-row-start: 2"> $100 </div>
            <div class="my-category-clue" style="grid-row-start: 3"> $200 </div>
            <div class="my-category-clue" style="grid-row-start: 4"> $300 </div>
            <div class="my-category-clue" style="grid-row-start: 5"> $400 </div>
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="categories">
        ${categories.map(getOneCategory).join('')}
    </div>`
})