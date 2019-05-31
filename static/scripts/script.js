// const socket = io()


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
    clearContainer()
    console.log('rendering home')
}

function renderSearch(){
    clearContainer()
    const container = document.querySelector('#container')
    const input = `
        <input id="search" type="text" placeholder="Search Artist Name">
    `
    container.insertAdjacentHTML('beforeend', input)
    container.querySelector('input#search').addEventListener('keyup', search)
}

function renderInfo(){
    clearContainer()
    console.log('rendering info')
}

function search(){
    if(this.value === '') return
    socket.emit('artist query',  this.value)
}

function clearContainer(){
    const container = document.querySelector('#container')
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}