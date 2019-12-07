# api-insta

an instagram api that actually works

## Usage

### Users:

```js
var insta = require('api-insta');

insta.user('instagram').then(result => {
  console.log(result.fullName); // Instagram

  console.log(result.followerCount); // 320,842,483
});
```

### Posts:

```js
var insta = require('api-insta');

insta.post('B5yID5Wg8dq').then(result => {
  console.log(result.likeCount); // 96,669

  console.log(result.location); // null
});
```

### Tags:

```js
var insta = require('api-insta');

insta.tag('instagram').then(result => {
  console.log(result.postCount); // 413,232,432
});
```

## Heroku App

### Users:

[https://api-insta-heroku.herokuapp.com/user/instagram](https://api-insta-heroku.herokuapp.com/user/instagram)

```json
{
  "id": "25025320",
  "username": "instagram",
  "fullName": "Instagram",
  "profilePic": "https://scontent-iad3-1.cdninstagram.com/vp/40dcfa18f9dc430ed1c3904506428f14/5E79F85D/t51.2885-19/s150x150/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  "profilePicHD": "https://scontent-iad3-1.cdninstagram.com/vp/51db0a5fd1901839463b1abb88099cc5/5E658E25/t51.2885-19/s320x320/59381178_2348911458724961_5863612957363011584_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
  "bio": "Bringing you closer to the people and things you love. ❤️",
  "website": "https://about.instagram.com/community/programs/pressure-to-be-perfect",
  "followerCount": "320,842,483",
  "followingCount": "222",
  "postCount": "6,148",
  "posts": ["B5yID5Wg8dq", "B5yBhoAAy3A", "B5vhMf_hshK", "B5slwthgOwy", "B5qHrvug1V9", "B5pzU1kAL1Z", "B5nkhHPBm2k", "B5llys_B04g", "B5lAxjZhWez", "B5iIVg3g9wc", "B5f0cjmgAzL", "B5frQ4Qgc8Z"],
  "isVerified": true,
  "isPrivate": false
}
```

### Posts:

[https://api-insta-heroku.herokuapp.com/post/B5yID5Wg8dq](https://api-insta-heroku.herokuapp.com/post/B5yID5Wg8dq)

```json
{
  "id": "2193851420594390890",
  "shortcode": "B5yID5Wg8dq",
  "owner": "instagram",
  "image": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/74682976_168481997591658_146251105177424787_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=1&oh=ecfbe8fbebd9a7e676bfce75de90c19d&oe=5E843439",
  "alt": "Image may contain: one or more people, people standing and shoes",
  "isVideo": false,
  "caption": "Natalie Glaze and Zanna van Dijk met because of Instagram. Today, they’re the #founders of Stay Wild Swim (@staywildswim), a sustainable swimwear brand designed and stitched in London.\n💕\n\nThe pair’s deep connection to sustainability and the ocean inspired them to start the company together. But neither had a formal background in fashion. “For us, there was so much bliss in the naiveté of just beginning our business,” explains Zanna. “We started out not really knowing what we were getting ourselves into and gave it a go — and the next thing you know, we’re in up to our necks.” 🌊✨ In our limited series #founders, we’re sharing the stories of amazing small business owners from all over the world. A new episode will be available every Saturday until Christmas. To see even more #founders stories, check out @instagramforbusiness",
  "timestamp": 1575747490,
  "date": "Dec 7, 2019",
  "timeAgo": "1 hour ago",
  "likeCount": "96,669",
  "commentCount": "1,289",
  "comments": [],
  "location": null,
  "mentions": [],
  "width": 1080,
  "height": 1350
}
```

### Tags

[https://api-insta-heroku.herokuapp.com/tag/instagram](https://api-insta-heroku.herokuapp.com/tag/instagram)

```json
{
  "id": "17843683441044043",
  "name": "instagram",
  "profilePic": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/c0.125.1080.1080a/s150x150/76937258_208906410142467_4966536007845976315_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&oh=48445fafd519464dcd70788041fa94ba&oe=5E754E53",
  "postCount": "413,232,432",
  "posts": ["B5yLv8LgFu0", "B5yO61hloVF", "B5yMYw8gXLl", "B5yPfiAAYfV", "B5yLfv-Afxz", "B5yLGftAd5f", "B5yKVA2Fp3H", "B5yMo_aDyGe", "B5yOdNqHgF_"],
  "relatedTags": ["photooftheday", "instagramer", "instagra"]
}
```

## Contact

### Discord: standalone#4048
