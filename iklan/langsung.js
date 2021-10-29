const targetLinkCPA = "https://streakattempt.com/bawy13cn7m?key=5bb3b475ab4e6430eca4c1bbf5195d00";

(function() {
    injectScript([{
        "attr": [],
        "tag": "script",
        "inner": "\ndocument.body.addEventListener(\"click\",()=>{\n\twindow.open(targetLinkCPA,\"_blank\");\n},{once:true})\n"
    }], {
        "target": "body"
    });

    function injectScript(e, t) {
        let n = t.target;
        for (let t of e) {
            let e = t.tag,
                r = t.inner,
                o = document.createElement(e);
            o.innerHTML = r;
            let c = t.attr;
            for (let e of c) o.setAttribute(e.name, e.value);
            document.querySelector(n) && document.querySelector(n).append(o)
        }
    }
})();