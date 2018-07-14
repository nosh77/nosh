var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://nosh:nosh77@ds137651.mlab.com:37651/nosh');
 
module.exports = connection;
