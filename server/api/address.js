module.exports = function (req, res) {
    let addr = require('../data/city.json');
    res.end(JSON.stringify(addr));
};