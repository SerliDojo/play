var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function () {
  console.log('Server start : '+ process.env.PORT);
});