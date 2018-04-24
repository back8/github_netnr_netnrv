//线路
var vipSource = [
    "https://player.baodai.org/ipsign/player.php?v=",

	"https://yun.baiyug.cn/vip/?url=",
    "https://1717ty.duapp.com/ty.php?url=",
			
    "http://www.1717yun.com/jx/ty.php?url=",
    "http://api.wlzhan.com/sudu/?url=",

    "http://v.buy360.vip/cxjx.php?v=",
    "http://vip.72du.com/api/?url=",

    "http://api.nepian.com/ckparse/?url=",
    "http://api.91exp.com/svip/?url=",
    
    "http://www.wmxz.wang/video.php?url=",

    "http://api.baiyug.cn/vip/index.php?url=",
    "http://jiexi.92fz.cn/player/vip.php?url=",

    "http://lookxw.com/yingzi/?url=",    

    "http://www.662820.com/xnflv/index.php?url="
];

//初始化
function init() {
    //绑定线路
    var htm = [], i = 0, len = vipSource.length;
    for (; i < len;) {
        htm.push('<option value="' + vipSource[i++] + '">线路 ' + i + '</option>');
    }
    $('#seVtype').html(htm.join(''));
    //带参播放
    var pars = location.search.toLowerCase().substring(1).split('&');
    $(pars).each(function () {
        if (this.indexOf('url=') >= 0) {
            $('#txtVipUri').val(this.substring(4));
            return false;
        }
    });
    $('#btnPlay')[0].click();
}

//切换源
$('#seVtype').change(function () {
    $('#btnPlay')[0].click();
});

//播放
$('#txtVipUri').keydown(function (e) {
    e = e || window.event;
    var key = e.keyCode || e.which || e.charCode;
    if (key == 13) {
        $('#btnPlay')[0].click();
    }
});
$('#btnPlay').click(function () {
    if ($('#txtVipUri').val().length > 10) {
        $('#inetnr')[0].src = $('#seVtype').val() + $('#txtVipUri').val();
    }
});

//全屏
$('#aGoFull').click(function () {
    var src = $('#inetnr')[0].src;
    if (src.length > 15) {
        location.href = src;
    } else {
        alert("请先粘贴VIP视频链接");
    }    
});

//自适应高度
$(window).on('load resize', function () {
    var ifn = $('#inetnr'), ch = $(this).height() - ifn.offset().top;
    ifn.css('height', ch - 45);
});

init();
