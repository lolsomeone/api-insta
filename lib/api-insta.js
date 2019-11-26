var axios = require('axios');

exports.user = username => {
  return new Promise((resolve, reject) => {
    if (!username) {
      reject(new Error('Username is required'));
    }

    axios
      .get('https://api-insta-heroku.herokuapp.com/api/user/' + username)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('User not found'));
      });
  });
};

exports.post = shortcode => {
  return new Promise((resolve, reject) => {
    if (!shortcode) {
      reject(new Error('shortcode is required'));
    }

    axios
      .get('https://api-insta-heroku.herokuapp.com/api/post/' + shortcode)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('Post not found'));
      });
  });
};

exports.tag = name => {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject(new Error('name is required'));
    }

    axios
      .get('https://api-insta-heroku.herokuapp.com/api/tag/' + name)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('Tag not found'));
      });
  });
};
