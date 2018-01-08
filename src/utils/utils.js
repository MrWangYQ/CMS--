function getCookie (target) {
    var value;
    document.cookie.split('; ').forEach((item, index) => {
        let items = item.split('=');
        if (items[0] === target) {
            value = items[1];
        }
    });
    return value;
}

function setCookie (a, b) {
    // arr 传过来是一个数组 把数组中的内容参数 解析放入document.cookie中
    if (!a || !b) return;
    document.cookie = a + '=' + b;
}

function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    };
}
export { getCookie, setCookie, delCookie };