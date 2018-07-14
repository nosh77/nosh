var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://a9a2a7:a992102207@ds137651.mlab.com:37651/nosh');
 
module.exports = connection;
