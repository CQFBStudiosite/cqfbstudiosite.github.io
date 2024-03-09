function open_url(url){
    window.open(url);
}

function redraw() {
    // 仅做测试
    if (window.innerWidth < 1280) {
        console.log("redraw");
    } else {
        console.log("normal");
    }
}

redraw();
window.addEventListener("resize", redraw)