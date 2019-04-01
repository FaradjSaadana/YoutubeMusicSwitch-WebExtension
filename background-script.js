var browser = browser || chrome
browser.browserAction.onClicked.addListener((tab) => {
    var url = tab.url;
    if (url.includes("://www.youtube.com")) {
        url = url.replace("www", "music")
        var updating = browser.tabs.update(
            tab.id,              // optional integer
            { "url": url }    // object
        )
    } else if (url.includes("://music.youtube.com")) {
        url = url.replace("music", "www")
        var updating = browser.tabs.update(
            tab.id,              // optional integer
            { "url": url }    // object
        )
    }
});