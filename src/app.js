"use strict";

import express from 'express';
import moment from 'moment'

const app = express();

app.get('/favicon.ico', (req, res) => {
    res.send(200);
});

app.get('/:time', (req,res) => {
  let time = req.params.time
  let unix = null;
  let natural = null;
  if (+time >= 0) {
    unix = +time;
    natural = unixToNat(unix);
}
// Check for initial natural time
if (isNaN(+time) && moment(time, "MMMM D, YYYY").isValid()) {
    unix = +natToUnix(time);
    natural = unixToNat(unix);
}

  res.send({ "unix": unix, "natural": natural })
})

app.listen(3000, () => console.log('express running on port 3000'));

function natToUnix(date) {
    return moment(date, "MMMM D, YYYY").format("X");
}

function unixToNat(unix) {
    return moment.unix(unix).format("MMMM D, YYYY");
}
