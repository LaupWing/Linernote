const fetch = require('node-fetch')

function getData({acces_token, url}){
    return fetch(url, 
    {
        headers:
        {
        'Authorization': 'Bearer ' + acces_token
        }
    })
        .then(response=> response.json())
}

module.exports = {getData}