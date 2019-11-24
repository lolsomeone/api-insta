<h1>igapi</h1>

<p>An Instagram API that actually works</p>

<h2>Usage</h1>

<h3>Users</h3>

```js
var igapi = require('igapi');

igapi.user('instagram').then(result => {
  console.log(result.fullName); // Instagram

  console.log(result.followers); // 318381368
});
```

<h3>Posts</h3>

```js
var igapi = require('igapi');

igapi.post('B5N5N8UgQcZ').then(result => {
  console.log(result.likes); // 346509

  console.log(result.location); // New York, New York
});
```

<h2>Heroku App</h2>

<h3>Users</h3>

[https://igapi-heroku.herokuapp.com/api/user/instagram](https://igapi-heroku.herokuapp.com/api/user/instagram)

```json
{
  "username": "instagram",
  "fullName": "Instagram",
  "profilePic": "https://scontent-ort2-1.cdninstagram.com/vp/dc07b4cb5761534479dbf928d45389a9/5E79F85D/t51.2885-19/s150x150/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
  "profilePicHD": "https://scontent-ort2-1.cdninstagram.com/vp/50f0e41314c9351889d9663548969cef/5E658E25/t51.2885-19/s320x320/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
  "bio": "Bringing you closer to the people and things you love. ❤️",
  "website": "https://www.antibullyingpro.com/resources",
  "followers": 318416089,
  "following": 227,
  "posts": 6130,
  "isVerified": true,
  "isPrivate": false
}
```

<h3>Posts</h3>

[https://igapi-heroku.herokuapp.com/api/post/B5N5N8UgQcZ](https://igapi-heroku.herokuapp.com/api/post/B5N5N8UgQcZ)

```json
{
  "shortcode": "B5N5N8UgQcZ",
  "owner": "instagram",
  "image": "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/75341445_187009205806804_38901299931220318_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=1&oh=114531462d0fcffaf042e2d8551a6ce6&oe=5E73BD55",
  "alt": "Man sitting on couch smiling",
  "isVideo": false,
  "video": null,
  "caption": "“I’m the kind of person that gets really obsessed about things and puts all my eggs in one basket,” explains Leo Wang, one of the #founders of Buffy (@buffy), an earth-friendly home goods brand based in NYC. “And if you’re like me, then that’s what being a founder is like.\n\nOriginally from Xi'an, China, Leo immigrated to the United States with his parents who later built a thriving weaving and fabric brand. He didn’t always expect to, but ultimately Leo built a modern brand rooted in his family tradition. “It’s important to be really observant, to learn to listen to the people around you but ultimately, trust yourself,” he says.\n\nIn our limited series #founders, we’re sharing the stories of amazing small business owners from all over the world. A new episode will be available every Saturday until Christmas.",
  "timestamp": 1574531749,
  "likes": 380156,
  "comments": 3795,
  "views": null,
  "location": "New York, New York",
  "width": 1080,
  "height": 1350
}
```
