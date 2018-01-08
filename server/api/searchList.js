const fs = require('fs');
module.exports = function (req, res) {
    let mock = JSON.parse(fs.readFileSync('./data/residentList.json', 'utf-8'));
    var searchData = [];
    mock.list.forEach((item, index) => {
        if (item.phone === req.body.group || item.name === req.body.group) {
            searchData.push(item);
        }
    });
    res.end(JSON.stringify(searchData));
};