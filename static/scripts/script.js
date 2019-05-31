const socket = io()

socket.on('queryresult', result=>renderSearchResult(result))
window.addEventListener('load', init)
    
function init(){
    const svgs = document.querySelectorAll('svg')
    svgs.forEach(svg=>{
        svg.addEventListener('click', navClick)
    })       
}

function navClick(){
    const svgs = document.querySelectorAll('svg')
    svgs.forEach(svg=>svg.classList.remove('visible'))
    this.classList.add('visible')
    if(this.id === 'nav-home')          renderHome()
    else if(this.id === 'nav-search')   renderSearch()
    else if(this.id === 'nav-info')     renderInfo()
}

// Rendering components
function renderHome(){
    const container = document.querySelector('#container')
    clearContainer(container)
    console.log('rendering home')
}

function renderSearch(){
    const container = document.querySelector('#container')
    clearContainer(container)
    const input = `
        <input id="search" type="text" placeholder="Search Artist Name">
    `
    const results = `
        <div id="results"></div>
    `
    container.insertAdjacentHTML('beforeend', input)
    container.insertAdjacentHTML('beforeend', results)
    container.querySelector('input#search').addEventListener('keyup', search)
}

function renderInfo(){
    const container = document.querySelector('#container')
    clearContainer(container)
    console.log('rendering info')
}

function search(){
    if(this.value === '') {
        clearContainer(document.querySelector('#results'))
        return
    }
    socket.emit('artist query',  this.value)
}

function clearContainer(container){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}
function renderSearchResult(results){
    const container = document.querySelector('#results')
    clearContainer(container)
    results.forEach(({name, images})=>{
        const newEl = `
        <div class="results-item">
            <img src="${images[0].url}" alt="">
            <p>${name}</p>
        </div>
        `
        container.insertAdjacentHTML('beforeend', newEl)
    })
}