//chrome.runtime.onInstalled.addListener(function() {
chrome.contextMenus.create({
    title: "VIP解析",
    contexts: ["page"],
    documentUrlPatterns: ["*://*.mgtv.com/*", "*://*.letv.com/*", "*://*.youku.com/*", "*://*.iqiyi.com/*", "*://*.v.qq.com/*", "*://*.tudou.com/*", "*://*.wasu.cn/*", "*://*.ku6.com/*", "*://*.56.com/*", "*://*.tv.sohu.com/*", "*://*.film.sohu.com/*", "*://*.1905.com/*", "*://*.pptv.com/*", "*://*.baofeng.com/*", "*://*.bilibili.com/*", "*://*.fun.tv/*", "*://*.6.cn/*"],//
    targetUrlPatterns: ["http://*/*"],
    onclick: function (b) {
        burl = "http://v.netnr.com/?url=" + encodeURIComponent(b.pageUrl);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (c) {
            chrome.tabs.update(c[0].id, {
                url: burl + "&title=" + encodeURI(c[0].title)
            })
        })
    }
});
chrome.browserAction.onClicked.addListener(function (b) {
    chrome.tabs.create({
        url: 'http://v.netnr.com'
    })
})
//});
