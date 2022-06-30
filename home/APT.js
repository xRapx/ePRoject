(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        r = Math.floor(new Date().getTime() / 1000000);
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.async = 1;
    js.src = "https://www.opinionstage.com/assets/loader.js?" + r;
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'os-widget-jssdk'));