const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    // 定义token值
    let token = jwt.sign(req.body, 'login', {expiresIn: 60 * 30});
    var userName = req.body.user_name;
    var userPwd = req.body.user_pwd;
    const adminList = fs.readFileSync('./data/admin_list.json', { encoding: 'utf-8' });
    const adminLists = JSON.parse(adminList);
    var obj;
    // authorization charge
    var flag = false;
    adminLists.list.forEach((item, index) => {
        if (item.user_name === userName) {
            flag = true;
            if (item.user_pwd === userPwd) {
                obj = { code: 1, 'token': token, message: '登录成功' };
                if (item.authorization === 'charge') {
                    obj.authorization = true;
                } else {
                    obj.authorization = false;
                }
            } else {
                obj = { code: 0, 'error': 'error', message: '用户名/密码错误，请重新输入' };
            }
        }
    });
    if (!flag) {
        obj = { code: -1, 'error': '不存在', message: '不存在用户名，请注册' };
    }
    res.end(JSON.stringify(obj));
};