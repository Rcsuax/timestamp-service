"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var app = (0, _express2.default)();

// app.get('/', (req,res) => {
//   res.send({'suckya':'mudda'})
// })

app.get('/:id', function (req, res) {
  // let id = req.params['id']
  res.send({ 'id': req.params });
});

app.listen(3000, function () {
  return console.log('express running on port 3000');
});