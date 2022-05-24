

async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=4")
    let data = await response.json()
    return data
    
}

function getOneCategory(category){
    return `<div class="category"> ${category.title} </div>
            <div class="player-clue-100"> $100 </div>
            <div class="player-clue-200"> $200 </div>
            <div class="player-clue-300"> $300 </div>
            <div class="player-clue-400"> $400 </div>
    `
}

getCategories().then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div class="categories">
        ${categories.map(getOneCategory).join('')}
    </div>`
})