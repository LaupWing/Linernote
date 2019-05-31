const fetch = require('node-fetch')

function getData({acces_token, endpoint}){
    return fetch(`https://api.spotify.com/v1/${endpoint}`, 
    {
        headers:
        {
        'Authorization': 'Bearer ' + acces_token
        }
    })
        .then(response=> response.json())
        .then(data=>console.log(data))
}

module.exports = {getData}