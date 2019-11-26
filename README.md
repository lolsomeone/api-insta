# API Insta

An Instagram API that actually works!

## Usage

### Users:

```js
var insta = require('api-insta');

insta.user('instagram').then(result => {
  console.log(result.fullName); // Instagram

  console.log(result.followers); // 318381368
});
```

### Posts:

```js
var insta = require('api-insta');

insta.post('B5N5N8UgQcZ').then(result => {
  console.log(result.likes); // 346509

  console.log(result.location); // New York, New York
});
```

## Heroku App

### Users:

[https://api-insta-heroku.herokuapp.com/api/user/instagram](https://api-insta-heroku.herokuapp.com/api/user/instagram)

```json
{
  "username": "instagram",
  "fullName": "Instagram",
  "profilePic": "https://scontent-iad3-1.cdninstagram.com/vp/40dcfa18f9dc430ed1c3904506428f14/5E79F85D/t51.2885-19/s150x150/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  "profilePicHD": "https://scontent-iad3-1.cdninstagram.com/vp/51db0a5fd1901839463b1abb88099cc5/5E658E25/t51.2885-19/s320x320/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  "bio": "Bringing you closer to the people and things you love. ❤️",
  "website": "https://www.antibullyingpro.com/resources",
  "followerCount": "318,747,392",
  "followingCount": "222",
  "postCount": "6,132",
  "posts": ["B5S9fwFA4TX", "B5QWhExAt3C", "B5N5N8UgQcZ", "B5N1Bj6FJn5", "B5LaUNrhpJY", "B5GItO7Ay8v", "B5DuwEMg38n", "B5DiUY0A1hF", "B5A8d5OghQc", "B4-TQiKARpv", "B477T5BgolN", "B472kHWgDNx"],
  "isVerified": true,
  "isPrivate": false
}
```

### Posts:

[https://api-insta-heroku.herokuapp.com/api/post/B5N5N8UgQcZ](https://api-insta-heroku.herokuapp.com/api/post/B5N5N8UgQcZ)

```json
{
  "shortcode": "B5S9fwFA4TX",
  "id": "2185079231992792279",
  "owner": "instagram",
  "image": "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/73420570_2443666732412876_6787222018942605745_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=1&oh=8598b50f6b9459cfaeab2382ce8c0fb4&oe=5E8A1618",
  "alt": "A girl sits on a bench with a grey wall behind her.",
  "isVideo": false,
  "video": null,
  "caption": "“Your hair is your crown, so wear it with pride,” says 17-year-old Ashley Masse (@ashley_masse). “My favorite way to wear my hair is in a puff. It’s a great way to get it out of my face, and I absolutely love big hair. The bigger the puff, the more confident I feel.” #ThisWeekOnInstagram⁣\n⁣\nPhoto by @ashley_masse",
  "timestamp": 1574701764,
  "date": "Nov 25, 2019",
  "timeAgo": "15 hours ago",
  "likes": "419,078",
  "comments": "4,031",
  "location": "Brooklyn, New York",
  "width": 1080,
  "height": 1350
}
```

## Contact

### Discord: lolsomeone#7244
