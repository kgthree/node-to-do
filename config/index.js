var configValues = require('./config');

module.exports = {

  getDbConnectionString: function () {
    return 'mongodb://' + configValues.uname +
    ':' + configValues.pwd +
    '@ds147354.mlab.com:47354/nodetodosample';
  }

}