const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    jwt.verify(req.body.token, 'login', (error, decoded) => {
        if (error) {
            error.msg = '过期';
            res.end(JSON.stringify(error));
        }
    });
    let mock = JSON.parse(fs.readFileSync('./data/residentList.json', 'utf-8'));
    let obj;
    console.log(req.body.delres, '============', req.body);
    if (req.body.delres === 'true') {
        // console.log('删除了');
        mock.list.forEach((item, index) => {
            if (item.id === req.body.id) {
                mock.list.splice(index, 1);
            }
        });
        obj = {
            code: 1,
            data: mock,
            message: '删除成功'
        };
    } else {
        // console.log('未删除');
        obj = {
            code: 0,
            data: '',
            message: '没有权限，请联系管理员'
        };
    }
    fs.writeFileSync('./data/residentList.json', JSON.stringify(mock));
    res.end(JSON.stringify(obj));
};
