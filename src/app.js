"use strict";

import express from 'express';
import moment from 'moment';

const app = express();
let port = process.env.PORT || 8080;

//This is to prevent the annoying favicon.ico browser requests
app.get('/favicon.ico', (req, res) => {
    res.send(200);
});

app.get('/', (req,res) => {
  res.send({"text":"timestamp home, input unix or natural time at after / to have it converted"})
})

app.get('/:time', (req, res) => {
    let time = req.params.time
    let unix = null;
    let natural = null;

    if (+time >= 0) {
        unix = +time;
        natural = unixToNat(unix);
    }

    if (isNaN(+time) && moment(time, "MMMM D, YYYY").isValid()) {
        unix = +natToUnix(time);
        natural = unixToNat(unix);
    }

    res.send({
        "unix": unix,
        "natural": natural
    })
})

app.listen(port, () => console.log('express running on port 3000'));

function naturalToUnix(date) {
    return moment(date, "MMMM D, YYYY").format("X");
}

function unixToNatural(unix) {
    return moment.unix(unix).format("MMMM D, YYYY");
}
