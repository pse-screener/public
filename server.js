/*eslint-disable no-console, no-var */
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop');
});
