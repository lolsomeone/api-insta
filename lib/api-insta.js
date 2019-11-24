var rp = require('request-promise');

exports.user = username => {
  return new Promise((resolve, reject) => {
    if (!username) {
      return reject(new Error('Username is required'));
    }

    rp('https://api-insta-heroku.herokuapp.com/api/user/' + username)
      .then(body => {
        var json = JSON.parse(body);

        resolve({
          username: json.username,
          fullName: json.fullName,
          profilePic: json.profilePic,
          profilePicHD: json.profilePicHD,
          bio: json.bio,
          website: json.website,
          followers: json.followers,
          following: json.following,
          posts: json.posts,
          isVerified: json.isVerified,
          isPrivate: json.isPrivate
        });
      })
      .catch(() => {
        return reject(new Error('User not found'));
      });
  });
};

exports.post = shortcode => {
  return new Promise((resolve, reject) => {
    if (!shortcode) {
      return reject(new Error('shortcode is required'));
    }

    rp('https://api-insta-heroku.herokuapp.com/api/post/' + shortcode)
      .then(body => {
        var json = JSON.parse(body);

        resolve({
          shortcode: json.shortcode,
          owner: json.owner,
          image: json.image,
          alt: json.alt,
          isVideo: json.isVideo,
          video: json.video,
          caption: json.caption,
          timestamp: json.timestamp,
          likes: json.likes,
          comments: json.comments,
          views: json.views,
          location: json.location,
          width: json.width,
          height: json.height
        });
      })
      .catch(() => {
        return reject(new Error('Post not found'));
      });
  });
};
