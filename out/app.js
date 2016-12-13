"use strict";

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/favicon.ico', function (req, res) {
    res.send(200);
});

app.get('/:time', function (req, res) {
    var time = req.params.time;
    var unix = null;
    var natural = null;
    if (+time >= 0) {
        unix = +time;
        natural = unixToNat(unix);
    }
    // Check for initial natural time
    if (isNaN(+time) && (0, _moment2.default)(time, "MMMM D, YYYY").isValid()) {
        unix = +natToUnix(time);
        natural = unixToNat(unix);
    }

    res.send({ "unix": unix, "natural": natural });
});

app.listen(3000, function () {
    return console.log('express running on port 3000');
});

function natToUnix(date) {
    return (0, _moment2.default)(date, "MMMM D, YYYY").format("X");
}

function unixToNat(unix) {
    return _moment2.default.unix(unix).format("MMMM D, YYYY");
}