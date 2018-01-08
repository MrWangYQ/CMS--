const fs = require('fs');
module.exports = function (req, res) {
    let mock = JSON.parse(fs.readFileSync('./data/residentList.json', 'utf-8'));
    mock.list.forEach((item, index) => {
        if (item.id === req.body.id) {
            console.log(item);
            console.log(req.body);
            item.info = req.body.field;
            console.log(item, '===');
        }
    });
    fs.writeFileSync('./data/residentList.json', JSON.stringify(mock));
    res.end(JSON.stringify(mock));
};