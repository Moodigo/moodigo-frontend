const fs = require('fs'),
    path = require('path');

const data = {
    feed: getJSON('data/feed.json'),
    availableTags: getJSON('data/availableTags.json'),
    userTags: getJSON('data/userTags.json')
};

const dataProvider = {
    getFeed: data.feed,
    getAvailableTags: data.availableTags,
    userTags: data.userTags
};

function getJSON(filename) {
    const mockPath = path.join(__dirname, filename);
    const mock = fs.readFileSync(mockPath, {encoding: 'utf8'});
    return JSON.parse(mock);
}

module.exports = dataProvider;
