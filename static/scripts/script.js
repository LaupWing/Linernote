const socket = io()

socket.on('queryresult', result=>renderSearchResult(result))
socket.on('detail data', details=>renderDetails(details))
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
    console.log('searching')
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
    console.log(results)
    results.forEach(({name, images, id})=>{
        const newEl = `
        <div data-id=${id} class="results-item">
            <img src="${images[0].url}" alt="">
            <p>${name}</p>
        </div>
        `
        container.insertAdjacentHTML('beforeend', newEl)
    })
    document.querySelectorAll('.results-item').forEach(result=>{
        result.removeEventListener('click', showDetail)
    })
    document.querySelectorAll('.results-item').forEach(result=>{
        result.addEventListener('click', showDetail)
    })
}

function renderDetails({details, related, events}){
    console.log(events)
    const container = document.querySelector('#container')
    clearContainer(container)
    const header = `
        <header 
            style="
                background:url(${details.images[0].url});
                background-repeat: no-repeat;
                background-size: cover;"
        >
            <div class="info">
                <div class="info-name">
                    <h2>${details.name}</h2>
                </div>
                <button>follow</button>
            </div>
        </header>
        <aside>
            <h3>Fans also like</h3>
            <div id="related_artists">
            </div>
        </aside>
    `
    container.insertAdjacentHTML('beforeend', header)
    const related_container = document.querySelector('#related_artists')
    related.artists.forEach(artist=>{
        const newEl = `
            <div data-id="${artist.id}" class="artists">
                <div class="image-container">
                    <img src="${artist.images[0].url}">
                </div>
                <h4>${artist.name}</h4>
            </div>
        `
        related_container.insertAdjacentHTML('beforeend', newEl)
    })
    document.querySelectorAll('#related_artists .artists').forEach(artist=>artist.addEventListener('click', showDetail))
}

function showDetail(){
    const id = this.getAttribute('data-id')
    socket.emit('get details', id)
}