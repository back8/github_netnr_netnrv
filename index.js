//线路
var vipSource = [
    "https://jx.618g.com/?url=",
    "https://api.sigujx.com/jx/?url=",
    "https://player.baodai.org/ipsign/player.php?v=",
    "https://api.bbbbbb.me/v.php?url="
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
    for (var i = 0; i < pars.length; i++) {
        var pi = pars[i];
        if (pi.indexOf('url=') >= 0) {
            $('#txtVipUri').val(decodeURIComponent(pi.substring(4)));
            break;
        }
    }
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
