var rp = require('request-promise');

exports.user = username => {
  return new Promise((resolve, reject) => {
    if (!username) {
      return reject(new Error('Username is required'));
    }

    rp('https://api-insta-heroku.herokuapp.com/api/user/' + username)
      .then(body => {
        resolve(JSON.parse(body));
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
        resolve(JSON.parse(body));
      })
      .catch(() => {
        return reject(new Error('Post not found'));
      });
  });
};
