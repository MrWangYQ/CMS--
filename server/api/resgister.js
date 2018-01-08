const fs = require('fs');
module.exports = function (req, res) {
    let userMsg = {
        'userName': req.body.user_name
    };
    req.body.authorization = 'visitor';
    const adminList = fs.readFileSync('./data/admin_list.json', { encoding: 'utf-8' });

    const adminLists = JSON.parse(adminList);

    var obj = {code: 1, info: userMsg, message: '成功'};
    var flag = true;
    adminLists.list.forEach((item, index) => {
        if (item.user_name === req.body.user_name) {
            flag = false;
            obj = {code: 0, error: 'error', message: '注册失败，已有此账户'};
        }
    });
    if (flag) {
        adminLists.list.push(req.body);
        fs.writeFileSync('./data/admin_list.json', JSON.stringify(adminLists));
    }
    res.end(JSON.stringify(obj));
};