const api = require('./index')();

api.on('articles', articles => console.log(articles));
