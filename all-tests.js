context = require.context("./__test__", true, /\.js$/);
context.keys().forEach(context);
module.exports = context;
