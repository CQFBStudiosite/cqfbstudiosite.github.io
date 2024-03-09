function cant_download() {
    // alert("抱歉, 整合包尚在制作当中!");
    alert("抱歉, 暂未开放!");
}

function load_css(url) {
    var link = document.createElement('link');
    link.type = "text/css";
    link.rel = "styleSheet";
    link.href = url;
    document.head.appendChild(link);
}

function is_mobile() {
    if (window.screen.width < 500) {
        return true;
    } else {
        return false;
    }
}

// 这些代码是未完成的测试性代码, 适配手机用
if (window.onload == true) {
    if (is_mobile()) {
        // load_css("mobile.css");
        // var style = document.getElementById("");
        // style.remove();
        var ils_link = document.getElementById("ils_link");
        ils_link.innerHTML = "Ils";
        var iccc_link = document.getElementById("iccc_link");
        iccc_link.innerHTML = "Iccc";
    } else {
        ils_link = document.getElementById("ils_link");
        ils_link.innerHTML = "分站 - IceLemonSquash个人主页";
        iccc_link = document.getElementById("iccc_link");
        iccc_link.innerHTML = "分站 - IceCreamChocolateCandy个人主页";
    }
}