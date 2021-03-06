const express = require('express');
const dataProvider = require('./data-provider');
const app = express();

let server = app.listen(9002, listening);

function listening() {
    console.log('Server is listening on http://localhost:9002/');
}

app.set('json spaces', 2);

app.use(function (req, res, next) {
    let allowOrigin = 'http://zoutly.com';
    if (req.headers.host === 'localhost:9002') {
        allowOrigin = "http://localhost:4200";
    }
    res.header("Access-Control-Allow-Origin", allowOrigin);
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

app.get('/available-tags', (request, response) => {
    response.status(200);
    const feedData = dataProvider.getAvailableTags;

    response.json(feedData);
});

app.get('/users/:userId/tags', (request, response) => {
    let userId = request.params.userId;
    const feedData = dataProvider.userTags;
    response.json(feedData);
});
