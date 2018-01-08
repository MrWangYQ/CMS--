var express = require('express');
var bodyParser = require('body-parser');
var  multer=require('multer');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());
app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var storage = multer.diskStorage({
 //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, './upload')
   }, 
 //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});  
 //添加配置文件到muler对象。
 var upload = multer({
      storage: storage
});




// 请求登录接口 /admin/loginUser
let login = '/admin/loginUser';

// 请求登录接口 /admin/resgisterUser
let resgister = '/admin/resgisterUser';

// 请求菜单接口 /admin/menu
let menu = '/admin/menu/:name';

// 图片地址
let upload = '/upload';
app.post(upload, upload.single(''), (req, res) => {
    res.end(JSON.stringify(1));
});

// 后台接口信息管理
let getAdd = '/admin/activity/add';

// mock
let mockApi = require('./api/Mock.js');
app.post('/useractive/info', mockApi);

// 搜索数据
let searchList = require('./api/searchList');
app.post('/search/info', searchList);

// mockaddress
let address = require('./api/address.js');
app.get('/province/info', address);

// 用户报名
let addresident = require('./api/addresident.js');
app.post('/addresident/info', addresident);

// 添加备注
let addfield = require('./api/addfield.js');
app.post('/addfield/info', addfield);

// 删除
let dresident = require('./api/dresident.js');
app.post('/delresident/info', dresident);

// 登录
let loginup = require('./api/login');
app.post(login, loginup);

// 注册
let resgisterup = require('./api/resgister');
app.post(resgister, resgisterup);

// 左侧列表
app.get(menu, (req, res) => {
    var data = null;
    switch (req.params.name) {
    case 'public':
        data = fs.readFileSync('./data/public.json', {encoding: 'utf-8'});
        break;
    case 'entry':
        data = fs.readFileSync('./data/entry.json', {encoding: 'utf-8'});
        break;
    case 'grid':
        data = fs.readFileSync('./data/grid.json', {encoding: 'utf-8'});
        break;
    default:
        data = '无用搜索信息';
        break;
    }
    res.end(data);
});

// 左侧列表更新
app.get('/api/menu', (req, res) => {
    const menuList = fs.readFileSync('./data/entry.json', { encoding: 'utf-8' });
    res.end(menuList);
});



// 添加地址
app.post(getAdd, (req, res) => {
    let addList = fs.readFileSync('./data/data_table/activity.json', 'utf-8');
    addList = JSON.parse(addList);
    addList.activity_list.push(req.body);
    fs.writeFileSync('./data/data_table/activity.json', JSON.stringify(addList));
    let data = {
        'code': 1,
        'msg': 'SUCCESS',
        'data': {
            'activityId': 1
        }
    };
    res.end(JSON.stringify(data));
});

app.listen(3000, function () {
    console.log('node server 3000');
});