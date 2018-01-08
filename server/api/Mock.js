const fs = require('fs');
// const Mock = require('mockjs');
module.exports = function (req, res) {
/*    let mock = Mock.mock({
        'list|0-200': [
            {
                'id': function () {
                    return Mock.mock('@increment(0)');
                },
                'name': function () {
                    return Mock.mock('@cname');
                },
                'phone': /^1[3458][0-9]\d{8}$/,
                'address': function () {
                    return Mock.mock('@province()');
                },
                'remark': function () {
                    return Mock.mock('@date');
                },
                'send|1': ['已通知', '未通知'],
                'sex|1': ['男', '女'],
                'info': '-',
                'age|20-60': 1
            }
        ]
    });
*/
    // console.log(JSON.stringify(mock));
    // let {count, pageSize} = req.body;
    // console.log(typeof fs.readFileSync('./residentList.json', 'utf-8'));
    let mock = JSON.parse(fs.readFileSync('./data/residentList.json', 'utf-8'));
    // console.log(mock);
    // console.log(mock.list);
    // var arr = ['1', '2', '3'];
    // const mocklist = mock.list.slice(count * (pageSize - 1), count * pageSize);
    res.end(JSON.stringify(mock));
};