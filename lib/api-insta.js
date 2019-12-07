var axios = require('axios');

exports.user = username => {
  if (!username) {
    throw new Error('Argument username is required');
  }

  return new Promise((resolve, reject) => {
    axios
      .get('https://api-insta-heroku.herokuapp.com/user/' + username)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('User not found'));
      });
  });
};

exports.post = shortcode => {
  if (!shortcode) {
    throw new Error('Argument shortcode is required');
  }

  return new Promise((resolve, reject) => {
    axios
      .get('https://api-insta-heroku.herokuapp.com/post/' + shortcode)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('Post not found'));
      });
  });
};

exports.tag = name => {
  if (!name) {
    throw new Error('Argument name is required');
  }

  return new Promise((resolve, reject) => {
    axios
      .get('https://api-insta-heroku.herokuapp.com/tag/' + name)
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(new Error('Tag not found'));
      });
  });
};
