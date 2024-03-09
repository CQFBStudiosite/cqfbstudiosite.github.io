// 绘制Logo
var canvas = document.getElementById("logo");
var context = canvas.getContext("2d");
context.fillStyle = "#EEE"
// C
context.beginPath();
context.arc(100, 100, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(100, 100);
context.closePath();
context.fill();

context.fillRect(90, 100, 10, 30);

context.beginPath();
context.arc(100, 130, 10, Math.PI, 0.5 * Math.PI, true);
context.lineTo(100, 130);
context.closePath();
context.fill();

context.fillRect(100, 130, 20, 10);

context.beginPath();
context.arc(110, 120, 10, Math.PI, 0.5 * Math.PI, true);
context.lineTo(100, 130);
context.closePath();
context.fill();

context.beginPath();
context.arc(120, 140, 10, 1.5 * Math.PI, 0);
context.lineTo(120, 140);
context.closePath();
context.fill();

context.fillRect(100, 90, 20, 10)

context.beginPath();
context.arc(120, 90, 10, 0.5 * Math.PI, 0, true);
context.lineTo(120, 90);
context.closePath();
context.fill();

context.beginPath();
context.arc(110, 110, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(100, 100);
context.closePath();
context.fill();
// .
context.beginPath();
context.arc(140, 135, 5, 0, 2 * Math.PI);
context.fill();
// Q
context.beginPath();
context.arc(155, 90, 10, 0.5 * Math.PI, 0, true);
context.lineTo(165, 100);
context.closePath();
context.fill();

context.fillRect(155, 100, 10, 30)

context.beginPath();
context.arc(165, 130, 10, Math.PI, 0.5 * Math.PI, true);
context.lineTo(165, 130);
context.closePath();
context.fill();

context.fillRect(165, 130, 20, 10);

context.beginPath();
context.moveTo(175, 120);
context.lineTo(175, 130);
context.lineTo(185, 130);
context.closePath();
context.fill();

context.beginPath();
context.moveTo(185, 130);
context.lineTo(185, 140);
context.lineTo(195, 140);
context.closePath();
context.fill();

context.beginPath();
context.moveTo(185, 140);
context.lineTo(190, 145);
context.lineTo(190, 140);
context.closePath();
context.fill();

context.fillRect(190, 140, 5, 5);

context.beginPath();
context.moveTo(195, 140);
context.lineTo(195, 145);
context.lineTo(200, 145);
context.closePath();
context.fill();

context.beginPath();
context.arc(175, 120, 10, 0.5 * Math.PI, 0, true);
context.lineTo(185, 130);
context.closePath();
context.fill();

context.beginPath();
context.arc(195, 140, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(185, 130);
context.closePath();
context.fill();

context.fillRect(185, 100, 10, 30);

context.beginPath();
context.arc(185, 100, 10, 1.5 * Math.PI, 0);
context.lineTo(185, 100);
context.closePath();
context.fill();

context.fillRect(165, 90, 20, 10);

context.beginPath();
context.arc(175, 110, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(165, 100);
context.closePath();
context.fill();
// .
context.beginPath();
context.arc(210, 135, 5, 0, 2 * Math.PI);
context.fill();
// F
context.beginPath();
context.arc(240, 100, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(240, 100);
context.closePath();
context.fill();

context.fillRect(230, 100, 10, 30);

context.beginPath();
context.arc(230, 130, 10, 0.5 * Math.PI, 0, true);
context.lineTo(230, 130);
context.closePath();
context.fill();

context.fillRect(240, 110, 10, 10);
context.fillRect(240, 90, 20, 10);

context.beginPath();
context.arc(260, 90, 10, 0.5 * Math.PI, 0, true);
context.lineTo(260, 90);
context.closePath();
context.fill();

context.beginPath();
context.arc(250, 110, 10, 0.5 * Math.PI, 0, true);
context.lineTo(250, 110);
context.closePath();
context.fill();
// .
context.beginPath();
context.arc(270, 135, 5, 0, 2 * Math.PI);
context.fill();
// B
context.fillRect(300, 90, 20, 10);
context.fillRect(300, 110, 20, 10);
context.fillRect(300, 130, 20, 10);
context.fillRect(290, 100, 10, 30);
context.fillRect(320, 100, 10, 30);

context.beginPath();
context.arc(300, 100, 10, Math.PI, 1.5 * Math.PI);
context.lineTo(300, 100);
context.closePath();
context.fill();

context.beginPath();
context.arc(330, 90, 10, Math.PI, 0.5 * Math.PI, true);
context.lineTo(320, 100);
context.closePath();
context.fill();

context.beginPath();
context.arc(310, 110, 10, 1.5 * Math.PI, 0);
context.lineTo(320, 100);
context.closePath();
context.fill();

context.beginPath();
context.arc(310, 130, 10, 1.5 * Math.PI, 0);
context.lineTo(320, 120);
context.closePath();
context.fill();

context.beginPath();
context.arc(300, 130, 10, Math.PI, 0.5 * Math.PI, true);
context.lineTo(300, 130);
context.closePath();
context.fill();

context.beginPath();
context.arc(320, 130, 10, 0.5 * Math.PI, 0, true);
context.lineTo(320, 130);
context.closePath();
context.fill();
// .
context.beginPath();
context.arc(345, 135, 5, 0, 2 * Math.PI);
context.fill();

// Studio.
context.font = "50px system-ui";
context.fillText("Studio.", 370, 135);

// 一群追梦人.
context.font = "15px system-ui"
context.fillText("一群追梦人.", 265, 200);