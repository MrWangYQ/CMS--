const fs = require('fs');
module.exports = function (req, res) {
    let mock = JSON.parse(fs.readFileSync('./data/residentList.json', 'utf-8'));
    let flag = false;
    mock.list.forEach((item, index) => {
        if (item.name === req.body.name) {
            flag = true;
        }
    });
    let obj;
    if (!flag) {
        req.body.id = mock.list.length;
        mock.list.unshift(req.body);
        obj = {code: 1, msg: '添加成功'};
    } else {
        obj = {code: 0, msg: '已有此用户，无需重复添加，或请重新添加用户'};
    }
    fs.writeFileSync('./data/residentList.json', JSON.stringify(mock));
    res.end(JSON.stringify(obj));
};