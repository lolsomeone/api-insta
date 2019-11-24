<h1>igapi</h1>

<p>an instagram api that actually works</p>

<h1>Usage</h1>

<h3>Users</h3>

```javascript
var igapi = require('igapi');

igapi.user('instagram').then(result => {
  console.log(result.full_name); // Instagram

  console.log(result.followers); // 318381368
});
```

<h3>Posts</h3>

```javascript
var igapi = require('igapi');

igapi.post('B5N5N8UgQcZ').then(result => {
  console.log(result.likes); // 346509

  console.log(result.location); // New York, New York
});
```

<h1>Heroku App</h1>

<h3>Users</h3>

[https://igapi-heroku.herokuapp.com/api/user/instagram](https://igapi-heroku.herokuapp.com/api/user/instagram)

```json
{
  "username": "instagram",
  "full_name": "Instagram",
  "bio": "Bringing you closer to the people and things you love. ❤️",
  "followers": 318381368,
  "following": 227,
  "is_verified": true,
  "is_private": false
}
```

<h3>Posts</h3>

[https://igapi-heroku.herokuapp.com/api/post/B5N5N8UgQcZ](https://igapi-heroku.herokuapp.com/api/post/B5N5N8UgQcZ)

```json
{
  "shortcode": "B5N5N8UgQcZ",
  "owner": "instagram",
  "image": "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/75341445_187009205806804_38901299931220318_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=1&oh=ebc70a3791394bb33ceb2fa163fdcc4f&oe=5E73BD55",
  "alt": "Man sitting on couch smiling",
  "is_video": false,
  "caption": "“I’m the kind of person that gets really obsessed about things and puts all my eggs in one basket,” explains Leo Wang, one of the #founders of Buffy (@buffy), an earth-friendly home goods brand based in NYC. “And if you’re like me, then that’s what being a founder is like.\n\nOriginally from Xi'an, China, Leo immigrated to the United States with his parents who later built a thriving weaving and fabric brand. He didn’t always expect to, but ultimately Leo built a modern brand rooted in his family tradition. “It’s important to be really observant, to learn to listen to the people around you but ultimately, trust yourself,” he says.\n\nIn our limited series #founders, we’re sharing the stories of amazing small business owners from all over the world. A new episode will be available every Saturday until Christmas.",
  "posted_at": 1574531749,
  "likes": 346509,
  "location": "New York, New York",
  "width": 1080,
  "height": 1350
}
```
