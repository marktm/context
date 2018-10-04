const superagent = require('superagent');

class MyListService {

  constructor() {
    this.agent = superagent.agent()
    this.agent.set('Accept', 'application/json')
    this.items = [
      {
        "castMembers": {
          "all": [],
          "display": ""
        },
        "credits": [],
        "description": {
          "short": "In this anthology of horror and suspense, a host of acclaimed writers, directors and actors joined forces to create 13 films.",
          "long": "In this anthology of horror and suspense, a host of acclaimed writers, directors and actors joined forces to create 13 films. With the talent behind movies such as SAW, AN AMERICAN WEREWOLF IN LONDON and BRIDE OF CHUCKY, horror fans are in for a real treat."
        },
        "duration": {
          "seconds": 0,
          "minutes": 0
        },
        "id": 4019509,
        "images": {
          "boxArt": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/thumbs/4019509.box_art.jpg",
          "masthead": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_1800,q_auto:best/thumbs/4019509.masthead.jpg",
          "thumbnail": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_1000,q_auto:best/thumbs/4019509.jpg"
        },
        "language": {
          "name": "English",
          "nativeName": "English",
          "code": "en"
        },
        "links": {
          "play": "/play/4019509",
          "detail": "/movies/watch/fear-itself/4019509"
        },
        "origin": "US",
        "position": 0,
        "publishDate": "2008-06-05T00:00:00+00:00",
        "rating": "TV-MA",
        "slug": "fear-itself",
        "title": "Fear Itself",
        "trackset": {
          "Media Title": "Fear Itself",
          "Media Type": "Series"
        },
        "videoType": "series",
        "year": 2008
      }
    ]
  }

  /**
   * Add item
   * @param {*} obj 
   */
  async add(video) {
    let { id } = video
    try {
      let res = await this.agent
        .post(`http://localhost:8080/api/my-list/${id}`)
      this.items.push(video)
    } catch (e) {
      this.handleError(e)
    }
    return this.items
  }

  /**
   * Get items
   */
  async get() {
    try {
      let res = await this.agent
        .get('http://localhost:8080/api/my-list')
      this.items = res.body
    } catch (e) {
      this.handleError(e)
    }
    return this.items
  }

  /**
   * Remove item from items array
   */
  async remove(id) {
    try {
      let res = await this.agent
        .delete(`http://localhost:8080/api/my-list/${id}`)
        this.items = this.items.filter(i => { return id !== i.id } )
    } catch (e) {
      this.handleError(e)
    }
    return this.items
  }

  /**
   * Toggle item
   */
  async toggleItem (video) {
    return await (this.isMyListItem(id))
      ? this.add(video)
      : this.remove(video.id)
  }

  /**
   *  Find and return item if in items array  
   * @param {*} id 
   */
  isMyListItem (id) {
    return this.items.find(i => { return id === i.id } )
  }


  /**
   * 
   * @param {*} e 
   */
  handleError(e) {
    console.log(e)
  }
}



// -------------------------------------------- //

let video = {
  "castMembers": {
    "all": [],
    "display": ""
  },
  "credits": [],
  "description": {
    "short": "In this anthology of horror and suspense, a host of acclaimed writers, directors and actors joined forces to create 13 films.",
    "long": "In this anthology of horror and suspense, a host of acclaimed writers, directors and actors joined forces to create 13 films. With the talent behind movies such as SAW, AN AMERICAN WEREWOLF IN LONDON and BRIDE OF CHUCKY, horror fans are in for a real treat."
  },
  "duration": {
    "seconds": 0,
    "minutes": 0
  },
  "id": 4019509,
  "images": {
    "boxArt": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/thumbs/4019509.box_art.jpg",
    "masthead": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_1800,q_auto:best/thumbs/4019509.masthead.jpg",
    "thumbnail": "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_1000,q_auto:best/thumbs/4019509.jpg"
  },
  "language": {
    "name": "English",
    "nativeName": "English",
    "code": "en"
  },
  "links": {
    "play": "/play/4019509",
    "detail": "/movies/watch/fear-itself/4019509"
  },
  "origin": "US",
  "position": 0,
  "publishDate": "2008-06-05T00:00:00+00:00",
  "rating": "TV-MA",
  "slug": "fear-itself",
  "title": "Fear Itself",
  "trackset": {
    "Media Title": "Fear Itself",
    "Media Type": "Series"
  },
  "videoType": "series",
  "year": 2008
}

let mlService = new MyListService()

// mlService.get().then(this.state = res)
// mlService.add(video).then(this.state = res)
// mlService.remove(id).then(this.state = res)
// mlService.isMyListItem(4019509)
//mlService.get().then(this.state = res)

console.log(mlService.isMyListItem(4019509))

















