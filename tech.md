# Technologies

## API's

### SPOTIFY

#### NOW PLAYING

Om te er achter te komen wat de gebruiker aan het beluisteren is gebruiken we de "currently-playing" endpoint. 

```
https://api.spotify.com/v1/me/player/currently-playing
```

De data die de enpoint terug geeft ziet er als volgt uit.

```javascript
{
  "context": {
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/spotify/playlist/49znshcYJROspEqBoHg3Sv"
    },
    "href" : "https://api.spotify.com/v1/users/spotify/playlists/49znshcYJROspEqBoHg3Sv",
    "type" : "playlist",
    "uri" : "spotify:user:spotify:playlist:49znshcYJROspEqBoHg3Sv"
  },
  "timestamp": 1490252122574,
  "progress_ms": 44272,
  "is_playing": true,
  "currently_playing_type": "track",
  "actions": {
    "disallows": {
      "resuming": true
    }
  },
  "item": {
    "album": {
      "album_type": "album",
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
      },
      "href": "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
      "id": "6TJmQnO44YE5BtTxH8pop1",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
          "width": 629
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
          "width": 295
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
          "width": 63
        }
      ],
      "name": "Hot Fuss",
      "type": "album",
      "uri": "spotify:album:6TJmQnO44YE5BtTxH8pop1"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
        },
        "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        "id": "0C0XlULifJtAgn6ZNCW2eu",
        "name": "The Killers",
        "type": "artist",
        "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
      }
    ],
    "available_markets": [
      "AD",
      "AR",
      "TW",
      "UY"
    ],
    "disc_number": 1,
    "duration_ms": 222075,
    "explicit": false,
    "external_ids": {
      "isrc": "USIR20400274"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
    },
    "href": "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
    "id": "0eGsygTp906u18L0Oimnem",
    "name": "Mr. Brightside",
    "popularity": 0,
    "preview_url": "http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:0eGsygTp906u18L0Oimnem"
  }
}

```

Wat we nodig hebben hieruit ziet er alsvolgt uit

```javascript
{
	"timestamp": 1490252122574,
	"artist" : "The Killers".
	"title" : "Mr. Brightside"
}
```

### TICKETMASTER

#### SEARCH ENDPOINT

Om evenementen op te zoeken maken we gebruik van de "events" endpoint van ticketmaster

```
https://app.ticketmaster.com/discovery/v2/events
```

## BACKEND

### OPZET

Omdat we waarschijnlijk een SPA(single page application) gaan maken zal de backend alleen data gaan serveren door middel van API's. Zo kan de client alleen opvragen wat het daad werkelijk nodig heeft.

### DEPENDENCIES

	-Express
	-Cors
	-Socket.io


### DATABASE

Omdat de gebruiker verschillende elementen kan liken en op kan commenten is het slim om een relationele database te gebruiken. Met een voorkeur voor MySql. 

### ENDPOINTS

Om een video uit de database op te halen

```
/search?q=kendrick%20lamar&type=video
```

Om een event uit de database op te halen

```
/search?q=kendrick%20lamar&type=event
```
Om een foto uit de database op te halen
```
/search?q=kendrick%20lamar&type=post
```

### DATAPUNT

Zo moet een datapunt er ongeveer uit gaan zien die naar de browser word gestuurd

```javascript
{
	"id": 922,
	"artist": "Kendrick Lamar",
	"type": "post"
	"image": "imageurl",
	"comments": [
		"id": 0,
		"user": "Zekkie"
		"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, architecto."
		"timestamp": "1490252122574"
	],
	"likes": [
		"id": 0,
		"user": "Loc"
	]
}

```