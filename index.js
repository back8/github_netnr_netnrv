//线路
var vipSource = [
    "https://api.sigujx.com/jx/?url=",
    "https://v.idc126.net/v/?url=",
    "https://jiexi.380k.com/?url="
];

//初始化
function init() {
    //绑定线路
    var htm = [], i = 0, len = vipSource.length;
    for (; i < len;) {
        htm.push('<option value="' + vipSource[i++] + '">线路 ' + i + '</option>');
    }
    document.getElementById('seVtype').innerHTML = htm.join('');
    //带参播放
    var pars = location.search.toLowerCase().substring(1).split('&');
    for (var i = 0; i < pars.length; i++) {
        var pi = pars[i];
        if (pi.indexOf('url=') >= 0) {
            document.getElementById('txtVipUri').value = decodeURIComponent(pi.substring(4));
            document.getElementById('btnPlay').click();
            break;
        }
    }
}

//切换源
document.getElementById("seVtype").onchange = function () {
    document.getElementById('btnPlay').click();
}

document.getElementById('btnPlay').onclick = function () {
    var uri = document.getElementById("txtVipUri").value;
    if (uri.length > 10) {
        document.getElementById('inetnr').src = document.getElementById('seVtype').value + document.getElementById('txtVipUri').value;
    }
}

window.onload = window.onresize = function () {
    var iv = document.getElementById('inetnr');
    var vh = document.documentElement.clientHeight - iv.getBoundingClientRect().top - 15;
    iv.style.height = vh + "px";
}

setTimeout(function () {
    init();
}, 10)