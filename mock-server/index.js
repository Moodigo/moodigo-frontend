const express = require('express');
const dataProvider = require('./data-provider');
const app = express();

app.listen(9002, listening);

function listening() {
    console.log('Server is listening on http://localhost:9002/');
}

app.set('json spaces', 2);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
    res.header("Access-Control-Allow-METHODS", "GET, OPTIONS, PATCH, POST");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/feed', (request, response) => {
    response.status(200);
    const feedData = dataProvider.getFeed;

    response.json(feedData);
});